var Montric = Ember.Application.create({
    ready: function() {
        this.register('session:setting', Montric.SettingsController, {singleton: true});
        this.inject('controller:setting', 'store', 'store:main');
        this.inject('controller', 'settings', 'session:setting');


    },

    createCookie: function(name, value, days) {
        var expires = null;

        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
        else {
            expires = "";
        }
        document.cookie = name+"="+value+expires+"; path=/";
    },

    readCookie:function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },

    eraseCookie:function (name) {
        this.createCookie(name, "", -1);
    }
});
Montric.ApplicationSerializer = DS.RESTSerializer.extend({});

Montric.RawTransform = DS.Transform.extend({
    deserialize: function(serialized) {
        return serialized;
    },
    serialize: function(deserialized) {
        return deserialized;
    }
});
Montric.Adapter = DS.RESTAdapter.extend({
    defaultSerializer: "Montric/application"
});
Montric.AdminAccessTokensAccessTokenController = Ember.ObjectController.extend({
    needs: ['admin'],

    actions: {
        doCommitAccessToken: function() {
            console.log('doCommitAccessToken: ' + this.get('model'));
            if (this.get('model')) this.get('model').save();
        }
    }
});
Montric.AdminAccessTokensController = Ember.ArrayController.extend({


});

Montric.AdminAccessTokensRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('accessToken');
    }
});
Montric.AdminController = Ember.Controller.extend({
    needs: ['application', 'user', 'adminAlerts', 'adminChartGroups', 'adminAccessTokens', 'adminAlertRecipients'],

    actions: {
        addNewUser: function() {
            this.set('showNewUserPanel', true);
        },

        saveNewUser: function() {
            var account = this.get('controllers.user.model.account');

            if (account && account.get('users')) {
                account.get('users').pushObject(this.get('newUserEmail'));

                account.get('content').save();

                this.set('newUserEmail', '');
                this.set('showNewUserPanel', false);
            }
        },

        cancelNewUser: function() {
            this.set('newUserEmail', '');
            this.set('showNewUserPanel', false);
        },

        addNewAlert: function() {
            this.set('showNewAlertPanel', true);
        },

        saveNewAlert: function() {
            var newAlertName = this.get('newAlertName');

            var newAlert = this.store.createRecord('alert', {
                id: newAlertName
            });

            this.set('newAlertName', "");

            this.set('showNewAlertPanel', false);
        },

        cancelNewAlert: function() {
            this.set('newAlertName', "");
            this.set('showNewAlertPanel', false);
        },

        addNewChartGroup: function() {
            this.set('showNewChartGroupPanel', true);
        },

        saveNewChartGroup: function() {
            var newChartGroupName = this.get('newChartGroupName');

            var newAlert = this.store.createRecord('chartGroup', {
                id: newChartGroupName
            });

            this.set('newChartGroupName', "");

            this.set('showNewChartGroupPanel', false);
        },

        cancelNewChartGroup: function() {
            this.set('newChartGroupName', "");
            this.set('showNewChartGroupPanel', false);
        },

        addNewAccessToken: function() {
            this.set('showNewAccessTokenPanel', true);
        },

        cancelNewAccessToken: function() {
            this.set('showNewAccessTokenPanel', false);
            this.set('newAccessTokenName', '');
        },

        saveNewAccessToken: function() {
            var newAccessTokenName = this.get('newAccessTokenName');

            var newAccessToken = this.store.createRecord('accessToken', {
                id: Math.uuid(16),
                accessTokenName: newAccessTokenName
            });

            newAccessToken.save();

            this.set('newAccessTokenName', '');
            this.set('showNewAccessTokenPanel', false);
        },

        addNewAlertRecipient: function() {
            this.set('showNewAlertRecipientPanel', true);
        },

        cancelNewAlertRecipient: function() {
            this.set('showNewAlertRecipientPanel', false);
            this.set('newAlertRecipientName', '');
        },

        saveNewAlertRecipient: function() {
            var newAlertRecipientName = this.get('newAlertRecipientName');

            var newAlertRecipient = this.store.createRecord('alertRecipient', {
                id: newAlertRecipientName
            });

            newAlertRecipient.save();

            this.set('newAlertRecipientName', '');
            this.set('showNewAlertRecipientPanel', false);
        }
    },
    isAdminAlertsActive: function() {
        return this.get('controllers.application.currentPath').startsWith("main.admin.alerts");
    }.property('controllers.application.currentPath'),

    isAdminChartGroupsActive: function() {
        return this.get('controllers.application.currentPath').startsWith("main.admin.chartGroups");
    }.property('controllers.application.currentPath'),

    isAdminAccessTokensActive: function() {
        return this.get('controllers.application.currentPath').startsWith("main.admin.accessTokens");
    }.property('controllers.application.currentPath'),

    isAdminAlertRecipientsActive: function() {
        return this.get('controllers.application.currentPath').startsWith("main.admin.alertRecipients");
    }.property('controllers.application.currentPath'),

    isAdminUsersActive: function() {
        return this.get('controllers.application.currentPath').startsWith("main.admin.users");
    }.property('controllers.application.currentPath'),

    contentIsLoadedObserver: function() {
        console.log('Metrics isLoaded: ' + this.get('content.isLoaded'));
        var rootNodes = Ember.A();

        if (this.get('content.isLoaded')) {
            console.log('Starting iteration over menu nodes');
            this.get('content').forEach(function(node) {
                if (!node.get('parent.id')) {
                    rootNodes.pushObject(node);
                }
            });

            rootNodes.sort(Montric.Metric.compareNodes);

            console.log('Finished iterating over menu nodes. found ' + rootNodes.get('length') + " root nodes");
        }

        this.set('rootNodes', rootNodes);
    }.observes('content.isLoaded').on('init'),

    isSelectedObserver: function() {
        if (this.get('content')) {
            var selectedNodes = this.get('content').filter(function(node) {
                if (node.get('isSelected')) { return true; }
            });

            this.set('selectedNodes', selectedNodes);
        }
    }.observes('content.@each.isSelected'),

    resetSelectedNodes: function() {
        console.log('resetSelectedNodes!!');
        this.get('selectedNodes').forEach(function(node) {
            node.set('isSelected', false);
        });
    }
});
Montric.AdminRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('metric');
    }
});
Montric.AdminAlertRecipientsAlertRecipientController = Ember.ObjectController.extend({
    needs: ['admin', 'adminAlertRecipients'],

    selectedAlertRecipients: Ember.A(),

    actions: {
        doCommitAlertRecipient: function() {
            console.log('doCommitAccessToken: ' + this.get('model'));
            if (this.get('model')) this.get('alertRecipient').save();
        },

        addNewRecipient: function() {
            var newRecipient = this.get('newRecipient');
            var alertRecipient = this.get('alertRecipient');

            if (alertRecipient && newRecipient) {
                alertRecipient.get('recipients').pushObject(newRecipient);
                this.set('newRecipient', null);
            }
        },

        deleteSelectedNodes: function() {
            var alertRecipient = this.get('alertRecipient');

            if (alertRecipient) {
                this.get('selectedAlertRecipients').forEach(function(recipient) {
                    alertRecipient.get('recipients').removeObject(recipient);
                });
            }

        }
    }
});
Montric.AdminAlertRecipientsAlertRecipientRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.RSVP.hash({
            alertRecipient: this.store.find('alertRecipient', params.alert_recipient_id)
        });
    }
});
Montric.AdminAlertRecipientsController = Ember.ObjectController.extend({

});
Montric.AdminAlertRecipientsRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            alertRecipients: this.store.find('alertRecipient'),
            alertPlugins: this.store.find('alertPlugin')
        });
    }
});
Montric.AdminAlertsController = Ember.ObjectController.extend({


});

Montric.AdminAlertsRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            alertRecipients: this.store.find('alertRecipient'),
            alerts: this.store.find('alert')
        });
    }
});
Montric.AdminAlertsAlertController = Ember.ObjectController.extend({
    needs: ['admin', 'adminAlerts'],

    actions: {
        doCommitAlert: function() {
            console.log('doCommitAlert: ' + this.get('model'));
            if (this.get('model')) this.get('model').save();
        }
    },

    alertTypes: [
        {"key": "greater_than", "value": "Greater than"},
        {"key": "less_than", "value": "Less than"},
        {"key": "equals", "value": "Equal to"}
    ]

});
Montric.AdminChartGroupsController = Ember.ArrayController.extend({

});
Montric.AdminChartGroupsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('chartGroup');
    }
});
Montric.AdminChartGroupsChartGroupController = Ember.ObjectController.extend({
    needs: ['admin'],

    actions: {
        doAddCheckedNodes: function () {
            console.log('doAddCheckedNodes');
            var selectedNodes = this.get('controllers.admin.selectedNodes');
            var selectedChartGroup = this.get('model');

            if (selectedChartGroup) {
                selectedNodes.forEach(function (node) {
                    var addGroup = true;
                    selectedChartGroup.get('chartGroups').forEach(function (existingGroup) {
                        console.log("existingGroup:");
                        console.log(existingGroup);
                        if (existingGroup.get('id') === node.get('id')) addGroup = false;
                    });

                    if (addGroup)
                        selectedChartGroup.get('chartGroups').pushObject(node);
                });
            } else {
                console.log('NO SELECTED CHART GROUP');
            }

            selectedNodes.setEach('isSelected', false);
        },

        doDeleteSelectedNodes: function() {
            var selectedNodes = this.get('selectedChartGroups');
            var chartGroups = this.get('chartGroups');

            chartGroups.forEach(function(chartGroup) {
                selectedNodes.forEach(function(selectedChartGroup) {
                    if (chartGroup.get('id') === selectedChartGroup) {
                        chartGroups.removeObject(chartGroup);
                    }
                });
            });


            this.set('selectedChartGroups', Ember.A());
        },

        doCommitChartGroup: function() {
            if (this.get('model')) {
                this.get('model').save();
            }
        }
    }
});

Montric.AdminUsersController = Ember.ObjectController.extend({
    needs: ['admin', 'user']
});
Montric.AdminUsersRoute = Ember.Route.extend({

});
Montric.AdminUsersUserController = Ember.ObjectController.extend({
    needs: ['admin', 'user'],

    actions: {
        setUserAdminLevel: function() {
            this.set('model.userRole', 'admin');
        },

        setUserUserLevel: function() {
            this.set('model.userRole', 'user');
        },

        doCommitUser: function() {
            this.get('model').save();
        }
    }
});
Montric.ApplicationController = Ember.Controller.extend({
    needs: ['explore', 'user'],

    timezones: null,
    selectedTimezone: null,
    chartTimespans: null,
    selectedChartTimespan: null,
    chartResolutions: null,
    selectedChartResolution: null,
    selectedChartFromString: null,
    selectedChartToString: null,
    selectedChartFrom: null,
    selectedChartTo: null,
    dateFormat: 'dd mmmm yyyy HH:MM',
    showLiveCharts: null,


    /* GIANT hack in order to be able to pull the chart-related properties out from the ChartAdapter */
    init: function() {
        this._super();

        this.get('controllers.user');
        this.set('showLiveCharts', true);
        this.set('timezones', []);
        this.set('chartTimespans', []);
        this.set('chartResolutions', []);
        this.set('selectedChartTo', new Date());
        var fromDate = new Date(this.get('selectedChartTo').getTime() - (10 * 60 * 1000));
        if (fromDate) {
            this.set('selectedChartFrom', fromDate);
        }

        this.generateChartStrings();

        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-12', timezoneName: 'UTC-12'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-11', timezoneName: 'UTC-11'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-10', timezoneName: 'UTC-10'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-9', timezoneName: 'UTC-9'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-8', timezoneName: 'UTC-8'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-7', timezoneName: 'UTC-7'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-6', timezoneName: 'UTC-6'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-5', timezoneName: 'UTC-5'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-4', timezoneName: 'UTC-4'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-3', timezoneName: 'UTC-3'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-2', timezoneName: 'UTC-2'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '-1', timezoneName: 'UTC-1'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '0', timezoneName: 'UTC0'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '1', timezoneName: 'UTC+1'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '2', timezoneName: 'UTC+2'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '3', timezoneName: 'UTC+3'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '4', timezoneName: 'UTC+4'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '5', timezoneName: 'UTC+5'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '6', timezoneName: 'UTC+6'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '7', timezoneName: 'UTC+7'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '8', timezoneName: 'UTC+8'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '9', timezoneName: 'UTC+9'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '10', timezoneName: 'UTC+10'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '11', timezoneName: 'UTC+11'}));
        this.get('timezones').pushObject(Ember.Object.create({timezoneValue: '12', timezoneName: 'UTC+12'}));

        var timezoneOffsetIndex = (-1 * new Date().getTimezoneOffset() / 60) + 12;
        this.set('selectedTimezone', this.get('timezones').objectAt(timezoneOffsetIndex));

        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '10 Minutes', timespanValue: '10'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '20 Minutes', timespanValue: '20'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '30 Minutes', timespanValue: '30'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '1 hour', timespanValue: '60'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '2 hours', timespanValue: '120'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '6 hours', timespanValue: '360'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '12 hours', timespanValue: '720'}));
        this.get('chartTimespans').pushObject(Ember.Object.create({timespanName: '24 hours', timespanValue: '1440'}));

        this.set('selectedChartTimespan', this.get('chartTimespans').objectAt(0));


        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '15 seconds', chartResolutionValue: '15'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '30 seconds', chartResolutionValue: '30'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '45 seconds', chartResolutionValue: '45'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '1 minute', chartResolutionValue: '60'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '3 minutes', chartResolutionValue: '180'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '10 minutes', chartResolutionValue: '600'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '20 minutes', chartResolutionValue: '1200'}));
        this.get('chartResolutions').pushObject(Ember.Object.create({chartResolutionName: '40 minutes', chartResolutionValue: '2400'}));

        this.set('selectedChartResolution', this.get('chartResolutions').objectAt(0));

        Montric.set('selectedTimezone', this.get('selectedTimezone.timezoneValue'));
        Montric.set('selectedChartTimespan', this.get('selectedChartTimespan.timespanValue'));
        Montric.set('selectedChartResolution', this.get('selectedChartResolution.chartResolutionValue'));
        Montric.set('selectedChartFromMs', this.get('selectedChartFrom').getTime());
        Montric.set('showLiveCharts', this.get('showLiveCharts'));
        Montric.set('selectedChartToMs', this.get('selectedChartTo').getTime());
    },

    selectedTimezoneObserver: function() {
        console.log('selectedTimezoneObserver');
        Montric.set('selectedTimezone', this.get('selectedTimezone.timezoneValue'));
    }.observes('selectedTimezone'),

    selectedChartTimespanObserver: function() {
        Montric.set('selectedChartTimespan', this.get('selectedChartTimespan.timespanValue'));
    }.observes('selectedChartTimespan'),

    selectedChartResolutionObserver: function() {
        Montric.set('selectedChartResolution', this.get('selectedChartResolution.chartResolutionValue'));
    }.observes('selectedChartResolution'),

    showLiveChartsObserver: function() {
        Montric.set('showLiveCharts', this.get('showLiveCharts'));
    }.observes('showLiveCharts'),

    selectedChartFromObserver: function() {
        Montric.set('selectedChartFromMs', this.get('selectedChartFrom').getTime());
    }.observes('selectedChartFrom'),

    selectedChartToObserver: function() {
        Montric.set('selectedChartToMs', this.get('selectedChartTo').getTime());
    }.observes('selectedChartTo'),

    historicalChartsSelected: function() {
        this.set('showLiveCharts', false);
    },

    liveChartsSelected: function() {
        this.set('showLiveCharts', true);
    },

    updateChartDates: function () {
        console.log('updateChartDates');
        var fromDate = Date.fromString(this.get('selectedChartFromString'));
        var toDate = Date.fromString(this.get('selectedChartToString'));

        if (toDate !== null && toDate.getYear() !== 1970) {
            this.set('selectedChartTo', toDate);
        } else {
            this.set('selectedChartFrom', new Date());
        }

        if (fromDate !== null && fromDate.getYear() !== 1970) {
            this.set('selectedChartFrom', fromDate);
        } else {
            fromDate = new Date(this.get('selectedChartFrom').getTime() - (10 * 60 * 1000));
            this.set('selectedChartFrom', fromDate);
        }

        var chartsController = this.get('controllers.explore');
        console.log('chartsController');
        console.log(chartsController);

        if (chartsController) {
            chartsController.reloadCharts();
        }
    },

    generateChartStrings: function () {
        this.set('selectedChartFromString', this.generateChartString(this.get('selectedChartFrom')));
        this.set('selectedChartToString', this.generateChartString(this.get('selectedChartTo')));
    },

    generateChartString: function (date) {
        var fmt = this.get('dateFormat') || 'dd.mm.yy';

        var dateString = date ? dateFormat(date, fmt) : "";
        return dateString;
    },

    showModal: function() {
        console.log('showModal');
        $("#chartOptionsModal").modal({show: true});
    }
});
Montric.CheckBoxComponent = Ember.Component.extend({
    actions: {
        doSelect: function() {
            this.toggleProperty('isSelected');
        }
    }
});
Montric.DatePickerComponent = Ember.Component.extend({
    classNames: ['input-append date'],
    picker: null,


    didInsertElement: function() {
        console.log('DATE TIME PICKER');
        var elementId = this.get('elementId');
        var picker = Ember.$("#" + elementId).datetimepicker({
            pickTime: true
        }).data('datetimepicker');

        var self = this;
        Ember.$("#" + elementId).on("changeDate", function(e) {
           self.set('date', e.localDate);
        });

        this.set('picker', picker);
    },

    dateObserver: function() {
        var date = this.get('date');
        var picker = this.get('picker');

        console.log('DATE OBSERVER PICKER');
        console.log(date);
        console.log(picker);

        if (date && picker) {
            picker.setLocalDate(date);
        }
    }.observes('date', 'picker').on('init')
});
Montric.LineChartComponent = Ember.Component.extend({
    classNames: ['chart'],
    resizeHandler: null,
    nvd3Chart: null,
    resizeTimeout: null,
    graph: null,

    serieObserver: function() {
        console.log('ChartView contentObserver!');
        var elementId = this.get('elementId');
        var series = this.get('chart.series');

        if (series) {
            var palette = new Rickshaw.Color.Palette( { scheme: "munin" } );

            series.forEach(function(serie) {
                if (!serie.color) {
                    serie.color = palette.color();
                }
            });

            var view = this;

            //Update chart with new series
            var graph = this.get('graph');
            if (graph && series) {
                for (var index = 0; index < graph.series.length; index++) {
                    if (series.length > index) {
                        graph.series[index] = series[index];
                    }
                }

                graph.update();
            }

            var resizeTimeout = this.get('resizeTimeout');
            $(window).resize(function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function() {
                    console.log("RESIZING WINDOW");
                    Ember.run(function() {
                        view.rerender();
                    });
                }, 100);
                view.set('resizeTimeout', resizeTimeout);
            });
        }

    }.observes('chart.series', 'chart.series.length').on('init'),

    willDestroyElement: function() {
        $(window).off("resize");

        var resizeTimeout = this.get('resizeTimeout');
        console.log("CLEARING TIMEOUT! " + resizeTimeout);
        clearTimeout(resizeTimeout);
    },

    didInsertElement : function() {
        console.log('ChartView didInsertElement');
        console.log(this.get('chart'));
        if (this.get('chart.series')) {
            var series = this.get('chart.series');

            var elementId = this.get('elementId');

            var viewElement = document.getElementById(elementId);

            var chartElement = document.createElement('div');
            chartElement.id = elementId + "_chart";
            chartElement.className = 'chart';
            viewElement.appendChild(chartElement);

            var legendContainerElement = document.createElement('div');
            legendContainerElement.id = elementId + "_legend_container";
            legendContainerElement.className = 'legend';
            chartElement.appendChild(legendContainerElement);

            var legendHeaderElement = document.createElement('div');
            legendHeaderElement.id = elementId + "_legend_header";
            legendHeaderElement.className = 'legend_header';
            legendHeaderElement.innerHTML = this.get('chart.name');
            legendContainerElement.appendChild(legendHeaderElement);

            var legendElement = document.createElement('div');
            legendElement.id = elementId + "_legend";
            legendContainerElement.appendChild(legendElement);

            var sliderElement = document.createElement('div');
            sliderElement.id = elementId + "_slider";
            viewElement.appendChild(sliderElement);

            var thisView = this;

            console.log('CONTROLLER: ' + this.get('numCharts') + " : " + this.$().height());
            console.log(this.$());
            var numCharts = this.get('numCharts');

            var height = (this.$().height() / numCharts) - (numCharts * 2);
            var width = this.$().width();

            console.log('height: ' + height + ' width: ' + width);

            $("#" + elementId).css('height', height + 'px');
            $("#" + elementId).css('width', width + 'px');


            var graph = new Rickshaw.Graph( {
                element: document.getElementById(elementId + "_chart"),
                width: width,
                height: height,
                renderer: 'lineplot',
                series: series,
                min: 0
            } );

            var legend = new Rickshaw.Graph.Legend( {
                graph: graph,
                element: document.getElementById(elementId + '_legend')

            } );

            var Hover = Rickshaw.Class.create(Rickshaw.Graph.HoverDetail, {

                render: function(args) {

                    var graph = this.graph;

                    var points = args.points;
                    var point = points.filter( function(p) { return p.active; } ).shift();

                    if (point.value.y === null) return;

                    var hoverHtml = '<span class="date">' + new Date(point.value.x).toUTCString() + '</span><br />';

                    args.detail.sort(function(a, b) { return a.order - b.order; }).forEach( function(d) {
                        if (!d.series.color) {
                            d.series.color = "#191990";
                        }
                        hoverHtml += '<span class="detail_swatch" style="background-color: ' + d.series.color + '"></span>';
                        hoverHtml += d.name + ": " + d.formattedYValue + "<br />";
                    });

                    var formattedXValue = point.formattedXValue;
                    var formattedYValue = point.formattedYValue;

                    this.element.innerHTML = '';
                    this.element.style.left = graph.x(point.value.x) + 'px';

                    var xLabel = document.createElement('div');

                    xLabel.className = 'x_label';
                    xLabel.innerHTML = formattedXValue;
                    this.element.appendChild(xLabel);

                    var item = document.createElement('div');
                    item.id = elementId + "_hoverdiv";
                    item.className = 'item';

                    // invert the scale if this series displays using a scale
                    var series = point.series;
                    var actualY = series.scale ? series.scale.invert(point.value.y) : point.value.y;

                    item.innerHTML = hoverHtml;//this.formatter(series, point.value.x, actualY, formattedXValue, formattedYValue, point);
                    item.style.top = this.graph.y(point.value.y0 + point.value.y) + 'px';

                    this.element.appendChild(item);

                    var dot = document.createElement('div');

                    dot.className = 'dot';
                    dot.style.top = item.style.top;
                    dot.style.borderColor = series.color;

                    this.element.appendChild(dot);

                    if (point.active) {

                        dot.className = 'dot active';
                    }

                    this.show();

                    if (typeof this.onRender == 'function') {
                        this.onRender(args);
                    }

                    var rightArrow = this.graph.x(point.value.x) > (width / 2);
                    var bottomArrow = this.graph.y(point.value.y) > (height / 2);
                    var itemWidth = $('#' + elementId + "_hoverdiv").outerWidth();
                    var itemHeight = $('#' + elementId + "_hoverdiv").outerHeight();


                    if (rightArrow && bottomArrow) {
                        item.className = 'item rightitemBottom active';
                        $('#' + elementId + "_hoverdiv").css({
                            left: $('#' + elementId + "_hoverdiv").position().left - itemWidth - 25 + "px",
                            top: $('#' + elementId + "_hoverdiv").position().top - itemHeight + 25 + "px"
                        });
                    } else if (rightArrow && !bottomArrow) {
                        item.className = 'item rightitem active';
                        $('#' + elementId + "_hoverdiv").css({
                            left: $('#' + elementId + "_hoverdiv").position().left - itemWidth - 25 + "px"
                        });
                    } else if (!rightArrow && bottomArrow) {
                        item.className = 'item leftitemBottom active';
                        $('#' + elementId + "_hoverdiv").css({
                            top: $('#' + elementId + "_hoverdiv").position().top - itemHeight + 25 + "px"
                        });
                    } else if (!rightArrow && !bottomArrow) {
                        item.className = 'item leftitem active';
                    }
                }
            });

            var hover = new Hover( { graph: graph } );

            var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
                graph: graph,
                legend: legend
            } );

            var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {
                graph: graph
            });

            var axes = new Rickshaw.Graph.Axis.X( {
                graph: graph,
                ticks: 9,
                tickFormat: function(x) {
                    return dateFormat(x, "dd/mm HH:MM:ss");
                }
            } );

            var y_ticks = new Rickshaw.Graph.Axis.Y( {
                graph: graph,
                tickFormat: Rickshaw.Fixtures.Number.formatKMBT
            } );
            y_ticks.render();
            axes.render();

            graph.render();

            this.set('graph', graph);
        }
    }
});

Montric.MultiSelectableListItemComponent = Ember.Component.extend({
    classNameBindings: ['active'],

    click: function() {
        console.log('CLICK: ' + this.get('node'));

        var alreadyIsSelected = this.get('isSelected');
        var selectedNodes = this.get('selectedNodes');

        var clickedId = this.get('node.id');

        if (!clickedId) {
            clickedId = this.get('node');
        }

        if (alreadyIsSelected) {
            selectedNodes.removeObject(clickedId);
        } else {
            console.log('pushing object: ' + clickedId);
            selectedNodes.pushObject(clickedId);
        }
    },

    isSelected: function() {
        var isSelected = false;

        var itemId = this.get('node.id');

        if (!itemId) {
            itemId = this.get('node');
        }

        var selectedNodes = this.get('selectedNodes');

        selectedNodes.forEach(function(selectedItem) {
            if (selectedItem === itemId) {
                isSelected = true;
            }
        });


        return isSelected;
    }.property('node.id', 'selectedNodes.length'),

    active: function() {
        var isSelected = false;
        var id = this.get('node.id');

        if (!id) {
            id = this.get('node');
        }

        if (this.get('selectedNodes')) {
            this.get('selectedNodes').forEach(function(selectedItem) {
                if (selectedItem === id) {
                    isSelected = true;
                }
            });
        }

        return isSelected;
    }.property('selectedNodes.length', 'node.id')
});
Montric.SingleSelectableListItemComponent = Ember.Component.extend({
    classNameBindings: ['active'],

    click: function() {
        console.log('CLICK: ' + this.get('node'));

        if (this.get('isSelected')) {
            this.set('selectedNode', null);
        } else {
            this.set('selectedNode', this.get('node'));
        }
    },

    isSelected: function() {
        var itemId = this.get('node.id');

        if (!itemId) {
            itemId = this.get('node');
        }

        var selectedNode = this.get('selectedNode');

        return selectedNode && selectedNode.get('id') === itemId;
    }.property('node.id', 'selectedNode.id')
});
Montric.TreeMenuComponent = Ember.Component.extend({
    classNames: ['selectableList'],

    actions: {
        selectNode: function(node) {
            console.log('TreeMenuComponent node: ' + node);
            this.set('selectedNode', node.get('id'));
        }
    }
});
Montric.TreeMenuNodeComponent = Ember.Component.extend({
    classNames: ['pointer'],

    actions: {
        toggleExpanded: function() {
            this.toggleProperty('node.isExpanded');
        },

        toggleSelected: function() {
            this.toggleProperty('node.isSelected');
        },

        selectNode: function(node) {
            console.log('selectedNode: ' + node);
            this.sendAction('action', node);
        }
    },

    isSelected: function() {
        console.log("'" + this.get('selectedNode') + "' :: '" + this.get('node.id') + "'");
        return this.get('selectedNode') === this.get('node.id');
    }.property('selectedNode', 'node.id'),

    showNode: function() {
        var show = true;
        var excludeGeneratedNodes = this.get('excludeGeneratedNodes');
        if (excludeGeneratedNodes && this.get('node.nodeType') === "generated") {
            show = false;
        }

        return show;
    }.property('excludeGeneratedNodes', 'node.nodeType')
});
Montric.ExploreController = Ember.ArrayController.extend({
    needs: ['application'],
    timeSelectionIsExpanded: false,

    timezonesBinding: 'controllers.application.timezones',
    selectedTimezoneBinding: 'controllers.application.selectedTimezone',

    chartTimespansBinding: 'controllers.application.chartTimespans',
    selectedChartTimespanBinding: 'controllers.application.selectedChartTimespan',

    chartResolutionsBinding: 'controllers.application.chartResolutions',
    selectedChartResolutionBinding: 'controllers.application.selectedChartResolution',

    isLiveCharts: true,

    selectedChartFromBinding: 'controllers.application.selectedChartFrom',
    selectedChartToBinding: 'controllers.application.selectedChartTo',

    actions: {
        toggleTimeSelection: function() {
            this.toggleProperty('timeSelectionIsExpanded');
        },

        selectLiveCharts: function() {
            Montric.set('showLiveCharts', true);
            this.set('isLiveCharts', true);
        },

        selectHistoricCharts: function() {
            Montric.set('showLiveCharts', false);
            this.set('isLiveCharts', false);
        },

        updateCharts: function() {
            this.reloadCharts();
        }
    },

    allowMultipleSelections: true,

    contentIsLoadedObserver: function() {
        console.log('Metrics isLoaded: ' + this.get('content.isLoaded'));
        var rootNodes = Ember.A();

        if (this.get('content.isLoaded')) {
            console.log('Starting iteration over menu nodes');
            this.get('content').forEach(function(node) {
                if (!node.get('parent.id')) {
                    rootNodes.pushObject(node);
                }
            });

            rootNodes.sort(Montric.Metric.compareNodes);

            console.log('Finished iterating over menu nodes. found ' + rootNodes.get('length') + " root nodes");
        }

        this.set('rootNodes', rootNodes);
    }.observes('content.isLoaded').on('init'),

    isSelectedObserver: function() {
        if (this.get('content')) {
            var selectedNodes = this.get('content').filter(function(node) {
                if (node.get('isSelected')) { console.log(node); console.log(node.get('chart')); return true;  }
            });

            this.set('selectedNodes', selectedNodes);
        }
    }.observes('content.@each.isSelected'),

    chartTimeObserver: function() {
        this.reloadCharts();
    }.observes('selectedTimezone', 'selectedChartTimespan', 'selectedChartResolution'),

    selectedNodesObserver: function() {
        if (this.get('selectedNodes.length')) {
            var length = this.get('selectedNodes.length');
            var showLiveCharts = this.get('controllers.application').get('showLiveCharts');
            if (length > 0 && this.get('chartTimerId') === null) {
                //start timer
                this.startTimer();
            } else if (length === 0 || !showLiveCharts){
                //stop timer if started
                this.stopTimer();
            }
        } else {
            this.stopTimer();
        }
    }.observes('selectedNodes.length'),

    startTimer: function() {
        console.log('Startig timer...');

        var controller = this;
        var intervalId = setInterval(function () {
            Ember.run(function() {
                if (controller.get('controllers.application').get('showLiveCharts')) {
                    controller.reloadCharts();
                }
            });
        }, 15000);

        this.set('chartTimerId', intervalId);
    },

    stopTimer: function() {
        console.log('Stopping timer...');
        if (this.get('chartTimerId') !== null) {
            console.log('stopping timer');
            clearInterval(this.get('chartTimerId'));
            this.set('chartTimerId', null);
        }
    },

    reloadCharts: function () {
        var controller = this;
        this.get('selectedNodes').forEach(function (node) {
            controller.reloadChart(node.get('chart'));
        });
    },

    reloadChart: function (chart) {
        if (chart && !chart.get('isDirty') && chart.get('isLoaded') && chart.get('content')) {
            console.log('Reloading: ' );
            console.log(chart);
            chart.get('content').reload();
        }
    }
});
Montric.ExploreRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('metric');
    }
});
Montric.ExploreView = Ember.View.extend({

    didInsertElement: function() {

    }
});
Montric.HeaderController = Ember.Controller.extend({
    needs: ['user'],

    actions: {
        doLogOut: function() {
            navigator.id.logout();
        }
    }
});
Montric.IndexRoute = Ember.Route.extend({
    beforeModel: function() {
        this.transitionTo('login');
    }
});
Montric.LoginController = Ember.Controller.extend({
    needs: ['user'],

    currMoment: moment(),

    actions: {
        selectAccountForUser: function(account) {
            var self = this;

            var uuidToken = this.get('controller.user.tempUuidToken');

            var payload = {
                uuidToken: this.get('controllers.user.tempUuidToken'),
                accountName: account
            };

            $.ajax({
                type: 'POST',
                url: '/user/auth/selectAccount',
                contentType: 'application/json',
                data: JSON.stringify(payload),

                success: function (res, status, xhr) {
                    Montric.createCookie("uuidToken", res.uuidToken, 1);

                    if (res.registered) {
                        self.get('controllers.user').set('uuidToken', res.uuidToken);
                        self.get('controllers.user').set('isLoggingIn', false);
                        self.get('controllers.user').reloadUser();
                    } else {
                        self.get('controllers.user').set('newUuidToken', res.uuidToken);
                        self.get('controllers.user').reloadUser();
                        self.get('controllers.user').transitionToRoute('register');
                    }
                }
            });
        }
    },

    init: function() {
        this._super();

        var controller = this;
        var interval = setInterval(function() {
            Ember.run.later(function() {
                console.log('Updating Moment...');
                controller.set('currMoment', moment());
            });
        }, 30000);

        this.set('momentInterval', interval);
    },

    currentDate: function() {
        return this.get('currMoment').format('ll');
    }.property('currMoment'),

    currentTime: function() {
        return this.get('currMoment').format('HH:mm a');
    }.property('currMoment'),

    isLoggedIn: function() {
        return this.get('controllers.user.isLoggedIn') === true && this.get('controllers.user.isUser') === true;
    }.property('controllers.user.isLoggedIn', 'controllers.user.isUser'),

    isLoggingIn: function() {
        return this.get('controllers.user.isLoggingIn');
    }.property('controllers.user.isLoggingIn')
});
Montric.LoginRoute = Ember.Route.extend({
    actions: {
        doLogin: function() {
            console.log('logging in!');
            //this.transitionTo('main.index');
            navigator.id.request();
        },

        doLogout: function() {
            navigator.id.logout();
        }
    }
});
Montric.AccessToken = DS.Model.extend({
    accountName: DS.attr('string'),
    accessTokenName: DS.attr('string'),
    accessTokenActivated: DS.attr('boolean')
});
Montric.Account = DS.Model.extend({
    accountType: DS.attr('string'),
    accessTokens: DS.attr('raw'),
    users: DS.attr('raw')
});
Montric.AdminMenu = DS.Model.extend({
    name: DS.attr('string'),
    nodeType: DS.attr('string'),
    parent: DS.belongsTo('adminMenu'),
    children: DS.hasMany('adminMenu'),

    isSelected: false,
    isExpanded: false,

    hasChildren: function() {
        return this.get('children').get('length') > 0;
    }.property('children').cacheable(),

    isLeaf: function() {
        return this.get('children').get('length') === 0;
    }.property('children').cacheable(),

    isAlert: function() {
        return this.get('nodeType') === 'alert';
    }.property('nodeType'),

    isExpandedObserver: function() {
        console.log('isExpanded: ' + this.get('id'));
        if (this.get('isExpanded')) {
            var children = this.get('children.content');
            if (children) {
                console.log('Sorting children');
                children.sort(Montric.AdminMenu.compareNodes);
            }
        }
    }.observes('isExpanded')
});

Montric.AdminMenu.reopenClass({
    compareNodes: function(nodeOne, nodeTwo) {
        if (nodeOne.get('id') > nodeTwo.get('id'))
            return 1;
        if (nodeOne.get('id') < nodeTwo.get('id'))
            return -1;
        return 0;
    }
});
Montric.Alert = DS.Model.extend({
    alertActivated: DS.attr('boolean'),
    //alertSource: DS.belongsTo('Montric.AdminMenuModel'),
    alertSource: DS.attr('string'),
    //alertNotifications: DS.hasMany('Montric.EmailGroupModel'),
    alertNotifications: DS.attr('raw'),
    //alertPlugins: SC.Record.toMany('EurekaJView.AlertPluginModel', {isMaster: YES}),
    alertWarningValue: DS.attr('number'),
    alertErrorValue: DS.attr('number'),
    alertType: DS.attr('string'),
    alertDelay: DS.attr('number')
});
Montric.AlertPlugin = DS.Model.extend({

});
Montric.AlertRecipient = DS.Model.extend({
    accountName: DS.attr('string'),
    pluginName: DS.belongsTo('alertPlugin', {async: true}),
    recipients: DS.attr('raw'),

    selectedRecipients: []
});
Montric.ChartGroup = DS.Model.extend({
    chartGroups: DS.hasMany('metric'),
    //chartGroups: DS.attr('raw'),
    selectedChartGroups: []
});
Montric.Chart = DS.Model.extend({
    name: DS.attr('string'),
    series: DS.attr('raw')
});
Montric.MainMenu = DS.Model.extend({
    name: DS.attr('string'),
    nodeType: DS.attr('string'),
    parent: DS.belongsTo('mainMenu'),
    children: DS.hasMany('mainMenu'),
    chart: DS.belongsTo('chart'),

    isSelected: false,
    isExpanded: false,

    isSelectedAdmin: false,
    isExpandedAdmin: false,

    hasChildren: function() {
        return this.get('children').get('length') > 0;
    }.property('children'),

    isLeaf: function() {
        return this.get('children').get('length') === 0;
    }.property('children'),

    isAlert: function() {
        return this.get('nodeType') === 'alert';
    }.property('nodeType'),

    isExpandedObserver: function() {
        console.log('isExpanded: ' + this.get('id'));
        if (this.get('isExpanded')) {
            var children = this.get('children.content');
            if (children) {
                console.log('Sorting children');
                children.sort(Montric.MainMenu.compareNodes);
            }
        }
    }.observes('isExpanded')
});

Montric.MainMenu.reopenClass({
    compareNodes: function(nodeOne, nodeTwo) {
        if (nodeOne.get('id') > nodeTwo.get('id'))
            return 1;
        if (nodeOne.get('id') < nodeTwo.get('id'))
            return -1;
        return 0;
    }
});
Montric.User = DS.Model.extend({
    userName: DS.attr('string'),
    accountName: DS.attr('string'),
    userRole: DS.attr('string'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    company: DS.attr('string'),
    country: DS.attr('string'),
    usage: DS.attr('string'),

    isNew: function() {
        return this.get('userRole') === 'activation';
    }.property('userRole'),

    isUser: function() {
        return this.get('userRole') === 'new' || this.get('userRole') === 'user' || this.get('userRole') === 'beta' || this.get('isAdmin') || this.get('isRoot');
    }.property('userRole'),

    isAdmin: function() {
        return this.get('userRole') === 'admin' || this.get('isRoot');
    }.property('userRole'),

    isAdminLevel: function() {
        return this.get('userRole') === 'admin' || this.get('isRoot');
    }.property('userRole'),

    isUserLevel: function() {
        return this.get('userRole') === 'user';
    }.property('userRole'),


    isRoot: function() {
        return this.get('userRole') === 'root';
    }.property('userRole'),

    isUnregistered: function() {
        return this.get('userRole') === 'notRegistered';
    }.property('userRole'),

    isNotAuthenticated: function() {
        return !(this.get('isUser') || this.get('isUnregistered'));
    }.property('userRole')
});
Montric.Metric = DS.Model.extend({
    nodeType: DS.attr('string'),
    parent: DS.belongsTo('metric', {inverse: 'children', async: 'true'}),
    children: DS.hasMany('metric', {inverse: 'parent'}),
    chart: DS.belongsTo('chart', {async: true}),

    name: function() {
        var name = this.get('id');

        var id = this.get('id');
        if (id && id.indexOf(":") > 0) {
            name = id.substr(id.lastIndexOf(":")+1, id.length);
        }

        return name;
    }.property('id'),

    isSelected: false,
    isExpanded: false,
    isSelectedAdmin: false,
    isExpandedAdmin: false,

    hasChildren: function() {
        return this.get('children').get('length') > 0;
    }.property('children').cacheable(),

    isLeaf: function() {
        return this.get('children').get('length') === 0;
    }.property('children').cacheable(),

    isAlert: function() {
        return this.get('nodeType') === 'alert';
    }.property('nodeType')

});

Montric.Metric.reopenClass({
    compareNodes: function(nodeOne, nodeTwo) {
        if (nodeOne.get('id') > nodeTwo.get('id'))
            return 1;
        if (nodeOne.get('id') < nodeTwo.get('id'))
            return -1;
        return 0;
    }
});
Montric.RegisterController = Ember.Controller.extend({
    needs: ['user'],

    newAccountName: null,
    newFirstName: null,
    newSurname: null,
    newCompanyName: null,
    newCountry: null,
    newUsage: null,
    errorMessage: null,

    accountNameIsUnique: false,

   actions: {
       registerAccount: function() {
           console.log('testing error message');

           this.validateNewAccount();
       },

       accountFocusOut: function() {
           console.log('accountFocusOut!!');
           var newAccountName = this.get('newAccountName');
           var self = this;

           if (newAccountName) {
               $.ajax({
                   type: 'GET',
                   url: '/verifyAccountName/account/' + newAccountName,
                   success: function(res, status, xhr) {
                       if (res && res.isUnique === true) {
                        self.set('errorMessage', 'Unique account name. Please continue...');
                           self.set('accountNameIsUnique', true);
                       } else {
                           self.set('errorMessage', 'That account name is already taken. Please choose another one.');
                           self.set('accountNameIsUnique', false);
                       }
                   },
                   error: function(xhr, status, err) {
                       self.set('errorMessage', 'Unable to verify unique account name. Please try again later. ');
                   }
               });
           }
       }
   },

    validateNewAccount: function() {
        var newAccountName = this.get('newAccountName');
        var accountNameIsUnique = this.get('accountNameIsUnique');
        var username = this.get('controllers.user.content.userName');
        var self = this;

        if (true) {//accountNameIsUnique && username) {
            var payload =  {
                user: {
                    id: username,
                    accountName: newAccountName,
                    firstname: this.get('newFirstName'),
                    lastname: this.get('newSurname'),
                    company: this.get('newCompanyName'),
                    country: this.get('newCountry'),
                    usage: this.get('newUsage')
                }
            };

            $.ajax({
                type: 'POST',
                url: '/user/auth/register',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                success: function(res, status, xhr) {
                    if (res && res.registered === true && res.uuidToken !== null) {
                        self.get('controllers.user').reloadUser();
                    } else if (res && res.registered === false && res.reason === "accountTaken") {
                        self.set('errorMessage', 'That account name is already taken. Please choose another one.');
                        self.set('accountNameIsUnique', false);
                    } else {
                        self.set('errorMessage', 'Unable to register account. Please try again later, or contact support.');
                    }
                },
                error: function(xhr, status, err) {

                }
            });
        } else {
            this.set('Please complete the registration from in order to register a new account');
        }
    },

    isErrorMessageShown: function() {
        return this.get('errorMessage') !== null;
    }.property('errorMessage'),

    canSendForm: function() {
        return this.get('accountNameIsUnique') === false && this.get('isErrorMessageShown') === false;
    }.property('accountNameIsUnique', 'isErrorMessageShown')
});
Montric.Router = Ember.Router.extend({
    location: 'history'
});

Montric.Router.map(function() {
    this.route('login');
    this.route('register');
    this.resource('main', {path: "/main"}, function() {
        this.resource('dashboards', {path: "/dashboards"}, function() {

        });
        this.resource('explore', {path: "/explore"}, function() {

        });
        this.resource('admin', {path: "/admin"}, function() {
            this.route('alerts', {path: "/alerts"}, function() {
                this.route('alert', {path: "/:alert_id"});
            });
            this.route('chartGroups', {path: "/chartGroups"}, function() {
                this.route('chartGroup', {path: "/:chart_group_id"});
            });
            this.route('alertRecipients', {path: "/alertRecipients"}, function() {
                this.route('alertRecipient', {path: "/:alert_recipient_id"});
            });
            this.route('accessTokens', {path: "/accessTokens"}, function() {
                this.route('accessToken', {path: "/:access_token_id"});
            });
            this.route('users', {path: '/users'}, function() {
                this.route('user', {path: "/:user_id"});
            });
            this.route('accounts');
        });
    });

});
Montric.ChartAdapter = DS.RESTAdapter.extend({
    find: function(store, type, id) {
        console.log('Montric.ChartAdapter find: ' + id);
        return this.ajax(this.buildURL(type.typeKey, id), 'GET');
    },

    buildURL: function(type, id) {
        var host = Ember.get(this, 'host'),
            namespace = Ember.get(this, 'namespace'),
            url = [];

        if (host) { url.push(host); }
        if (namespace) { url.push(namespace); }

        url.push(Ember.String.pluralize(type));
        if (id) { url.push(id); }

        url = url.join('/');
        if (!host) { url = '/' + url; }

        var queryString = this.buildQueryString();

        return url + queryString;
    },

    buildQueryString: function() {
        var queryString = "?tz=" + Montric.get('selectedTimezone');
        if (Montric.get('showLiveCharts')) {
            queryString += "&ts=" + Montric.get('selectedChartTimespan');
        } else {
            queryString += "&chartFrom=" + Montric.get('selectedChartFromMs');
            queryString += "&chartTo=" + Montric.get('selectedChartToMs');
        }
        queryString += "&rs=" + Montric.get('selectedChartResolution');

        return queryString;
    }
});

Montric.MetricSerializer = DS.RESTSerializer.extend({
    // First, restructure the top-level so it's organized by type
    //extractSingle: function(store, type, payload, id) { }

    //Here, for any node of type "chart", we need to add the chart to the
    //chart property, so that Ember Data can resolve the belongsTo relationship
    normalizePayload: function(payload) {
        console.log("NORMALIZING PAYLOAD");
        payload = this._super(payload); //Transform the payload using the standard normalizer


        if (payload.metrics) {
            payload.metrics.forEach(function(metric) {
                metric.chart = metric.id;

                /*if (metric.nodeType === "chart") {
                    metric.chart = metric.id;
                } else if (metric.nodeType === "alert") {
                    metric.chart = metric.id;
                } else if (metric.nodeType === "grouped_statistics") {
                    metric.chart = metric.id;
                }*/
            });
        }

        return payload;
    },

    // First, restructure the top-level so it's organized by type
    // and the comments are listed under a post's `comments` key.
    extractArray: function(store, type, payload) {
        console.log("EXTRACT ARRAY");
        var metrics = payload.metrics;

        metricCache = {};

        var alertsKey = "Alerts";
        var chartGroupKey = "Chart Groups";

        metricCache[alertsKey] = {"id": alertsKey, "name": "Alerts", "parent": null, "children": [], "nodeType": "generated"};
        metricCache[chartGroupKey] = {"id": chartGroupKey, "name": "Chart Groups", "parent": null, "children": [], "nodeType": "generated"};

        console.log('metrics before: ' + metrics.get('length'));

        metrics.forEach(function(metric) {
            if (metric.id && metric.id !== "null") {
                if (metric.nodeType && metric.nodeType === "alert") {
                    metricCache[alertsKey].children.pushObject(metric.id);
                    metric.parent = alertsKey;
                    metricCache[metric.id] = metric;
                } else if (metric.nodeType && metric.nodeType === "grouped_statistics") {
                    metricCache[chartGroupKey].children.pushObject(metric.id);
                    metric.parent = chartGroupKey;
                    metricCache[metric.id] = metric;
                } else if (metric.nodeType && metric.nodeType === "chart") {
                    metricCache[metric.id] = metric;


                    var metricId = metric.id;

                    while (metricId.indexOf(":") > 0) {
                        var parentId = metricId.substr(0, metricId.lastIndexOf(":"));
                        var parentObject = metricCache[parentId];

                        if (!parentObject || !parentObject.id) {
                            parentObject = { "id": parentId, children: [metricId], parent: null };
                            metricCache[parentId] = parentObject;
                        }

                        if (!parentObject.children) {
                            parentObject.children = [];
                        }

                        if (!parentObject.children.contains(metricId)) {
                            parentObject.children.pushObject(metricId);
                        }

                        var currMetric = metricCache[metricId];
                        if (currMetric) {
                            currMetric.parent = parentId;
                        } else {
                            currMetric = {"id": metricId, children: [], parent: parentId};
                            metricCache[metricId] = currMetric;
                        }

                        metricId = parentId;
                    }
                }
            }
        });

        var metricsArray = [];
        for (var m in metricCache) {
            metricsArray.pushObject(metricCache[m]);
        }

        console.log('metrics after: ' + metricsArray.get('length'));

        payload = { metrics: metricsArray};

        //console.log(JSON.stringify(payload));

        return this._super(store, type, payload);
    }
});

Montric.RawTransform = DS.Transform.extend({
    deserialize: function(serialized) {
        return serialized;
    },
    serialize: function(deserialized) {
        return deserialized;
    }
});
Montric.SettingsController = Ember.Controller.extend({

});
Montric.ApplicationStore = DS.Store.extend({
    adapter:  "Montric.Adapter"
});
Montric.UserController = Ember.Controller.extend({
    needs: ['application'],

    init: function() {
        var controller = this;

        var cookie = Montric.readCookie("uuidToken");
        if (cookie) {
            this.set('uuidToken', cookie);
        }


        navigator.id.watch({

            onlogin: function(assertion) {
                controller.set('isLoggingIn', true);

                $.ajax({
                    type: 'POST',
                    url: '/user/auth/login',
                    data: {assertion: assertion},

                    success: function(res, status, xhr) {
                        console.log(res);

                        if (res.uuidToken) {

                            if (res.multipleAccounts === true) {
                                controller.set('multipleAccounts', res.multipleAccounts);
                                controller.set('accounts', res.accounts);
                                controller.set('tempUuidToken', res.uuidToken, 1);
                            } else {
                                //console.log('setting uuidToken: ' + res.uuidToken);
                                Montric.createCookie("uuidToken", res.uuidToken, 1);
                            }
                        }

                        if (res.registered === true) {
                            //login user
                            console.log('user authenticated. Setting UUID Token');
                            controller.set('uuidToken', res.uuidToken);
                            controller.set('isLoggingIn', false);
                            controller.reloadUser();
                        } else {
                            console.log('onLogin success. Not Registered');
                            controller.set('newUuidToken', res.uuidToken);
                            controller.reloadUser();
                            controller.transitionToRoute('register');
                        }
                    },
                    error: function(xhr, status, err) { console.log("error: " + status + " error: " + err); }
                });
            },

            onlogout: function() {
                //console.log('Logout not yet implemented on server. Deleting cookie on client');
                controller.set('content', null);
                controller.set('uuidToken', null);
                Montric.eraseCookie("uuidToken");


            }
        });
    },

    uuidTokenObserver: function() {
        //console.log('Fetching user: ' + this.get('uuidToken'));

        if (this.get('uuidToken')) {
            var self = this;
            this.store.find('user', this.get('uuidToken')).then(function(data) {
                self.set('content', data);
            });
        } else {
            this.set('content', null);
            this.transitionToRoute('login');
        }

    }.observes('uuidToken').on('init'),

    reloadUser: function() {
        var self = this;

        //Dirty fix because content.reload doesn't actually reaload :(
        $.ajax({
            type: 'GET',
            url: '/users',
            success: function(res, status, xhr) {
                if (!self.get('content')) {
                    self.set('content', self.store.createRecord('user', {}));
                }
                self.set('content.userName', res.user.userName);
                self.set('content.accountName', res.user.accountName);
                self.set('content.userRole', res.user.userRole);
                self.set('content.firstname', res.user.firstname);
                self.set('content.lastname', res.user.lastname);
                self.set('content.company', res.user.company);


            }
        });
    },

    accountNameObserver: function() {
        if (this.get('content.accountName')) {
            this.set('content.account', this.store.find('account', this.get('content.accountName')));
        }
    }.observes('content.accountName'),

    isLoggedIn: function() {
        return this.get('content.id') !== undefined && this.get('content.id') !== null;
    }.property('content.id'),

    userRoleObserver: function() {
        if (this.get('content.isNotAuthenticated')) {
            console.log('user is not authenticated in Montric. Transitioning to Login');
            this.transitionToRoute('login');
        } else if (this.get('content.isNew')) {
            this.transitionToRoute('login.activation');
        } else if (this.get('content.isUnregistered')) {
            console.log('user is not registered in Montric. Transitioning to Registration');
            console.log(this);
            this.transitionToRoute('register');
        } else if (this.get('content.isUser')) {
            console.log('user is logged in and is a user: ' + this.get('content.isUser') + " :: " + this.get('content'));

            if (this.get('controllers.application.currentPath') === "login" ||
                this.get('controllers.application.currentPath') === "register") {
                console.log('redirecting to dashboards');
                this.transitionToRoute('dashboards');
            }

            /*if (this.get('controllers.application.currentPath') === 'main.login.index' ||
                this.get('controllers.application.currentPath') === 'main.login.register' ||
                this.get('controllers.application.currentPath') === 'main.login.activation') {

                console.log('resetting mainCharts controller');
                this.set('controllers.mainCharts.content', null);
                this.transitionToRoute('main.charts');
            }*/
        }
    }.observes('content.userRole')
});
if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str){
        return this.slice(0, str.length) == str;
    };
}

if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str){
        return this.slice(-str.length) === str;
    };
}
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
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
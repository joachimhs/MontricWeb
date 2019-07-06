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
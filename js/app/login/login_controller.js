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
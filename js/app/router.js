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
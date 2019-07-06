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
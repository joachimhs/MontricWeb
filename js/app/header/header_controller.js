Montric.HeaderController = Ember.Controller.extend({
    needs: ['user'],

    actions: {
        doLogOut: function() {
            navigator.id.logout();
        }
    }
});
Montric.AdminAccessTokensRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('accessToken');
    }
});
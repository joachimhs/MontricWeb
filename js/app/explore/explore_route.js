Montric.ExploreRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('metric');
    }
});
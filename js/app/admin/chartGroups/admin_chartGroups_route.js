Montric.AdminChartGroupsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('chartGroup');
    }
});
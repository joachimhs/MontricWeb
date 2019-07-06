Montric.AdminAlertsRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            alertRecipients: this.store.find('alertRecipient'),
            alerts: this.store.find('alert')
        });
    }
});
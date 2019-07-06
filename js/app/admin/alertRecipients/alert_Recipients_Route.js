Montric.AdminAlertRecipientsRoute = Ember.Route.extend({
    model: function() {
        return Ember.RSVP.hash({
            alertRecipients: this.store.find('alertRecipient'),
            alertPlugins: this.store.find('alertPlugin')
        });
    }
});
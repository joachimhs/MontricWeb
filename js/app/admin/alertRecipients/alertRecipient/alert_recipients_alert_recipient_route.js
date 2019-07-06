Montric.AdminAlertRecipientsAlertRecipientRoute = Ember.Route.extend({
    model: function(params) {
        return Ember.RSVP.hash({
            alertRecipient: this.store.find('alertRecipient', params.alert_recipient_id)
        });
    }
});
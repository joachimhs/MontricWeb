Montric.AdminAlertRecipientsAlertRecipientController = Ember.ObjectController.extend({
    needs: ['admin', 'adminAlertRecipients'],

    selectedAlertRecipients: Ember.A(),

    actions: {
        doCommitAlertRecipient: function() {
            console.log('doCommitAccessToken: ' + this.get('model'));
            if (this.get('model')) this.get('alertRecipient').save();
        },

        addNewRecipient: function() {
            var newRecipient = this.get('newRecipient');
            var alertRecipient = this.get('alertRecipient');

            if (alertRecipient && newRecipient) {
                alertRecipient.get('recipients').pushObject(newRecipient);
                this.set('newRecipient', null);
            }
        },

        deleteSelectedNodes: function() {
            var alertRecipient = this.get('alertRecipient');

            if (alertRecipient) {
                this.get('selectedAlertRecipients').forEach(function(recipient) {
                    alertRecipient.get('recipients').removeObject(recipient);
                });
            }

        }
    }
});
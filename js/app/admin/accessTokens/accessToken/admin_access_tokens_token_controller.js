Montric.AdminAccessTokensAccessTokenController = Ember.ObjectController.extend({
    needs: ['admin'],

    actions: {
        doCommitAccessToken: function() {
            console.log('doCommitAccessToken: ' + this.get('model'));
            if (this.get('model')) this.get('model').save();
        }
    }
});
Montric.AdminUsersUserController = Ember.ObjectController.extend({
    needs: ['admin', 'user'],

    actions: {
        setUserAdminLevel: function() {
            this.set('model.userRole', 'admin');
        },

        setUserUserLevel: function() {
            this.set('model.userRole', 'user');
        },

        doCommitUser: function() {
            this.get('model').save();
        }
    }
});
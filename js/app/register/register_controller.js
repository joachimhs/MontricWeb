Montric.RegisterController = Ember.Controller.extend({
    needs: ['user'],

    newAccountName: null,
    newFirstName: null,
    newSurname: null,
    newCompanyName: null,
    newCountry: null,
    newUsage: null,
    errorMessage: null,

    accountNameIsUnique: false,

   actions: {
       registerAccount: function() {
           console.log('testing error message');

           this.validateNewAccount();
       },

       accountFocusOut: function() {
           console.log('accountFocusOut!!');
           var newAccountName = this.get('newAccountName');
           var self = this;

           if (newAccountName) {
               $.ajax({
                   type: 'GET',
                   url: '/verifyAccountName/account/' + newAccountName,
                   success: function(res, status, xhr) {
                       if (res && res.isUnique === true) {
                        self.set('errorMessage', 'Unique account name. Please continue...');
                           self.set('accountNameIsUnique', true);
                       } else {
                           self.set('errorMessage', 'That account name is already taken. Please choose another one.');
                           self.set('accountNameIsUnique', false);
                       }
                   },
                   error: function(xhr, status, err) {
                       self.set('errorMessage', 'Unable to verify unique account name. Please try again later. ');
                   }
               });
           }
       }
   },

    validateNewAccount: function() {
        var newAccountName = this.get('newAccountName');
        var accountNameIsUnique = this.get('accountNameIsUnique');
        var username = this.get('controllers.user.content.userName');
        var self = this;

        if (true) {//accountNameIsUnique && username) {
            var payload =  {
                user: {
                    id: username,
                    accountName: newAccountName,
                    firstname: this.get('newFirstName'),
                    lastname: this.get('newSurname'),
                    company: this.get('newCompanyName'),
                    country: this.get('newCountry'),
                    usage: this.get('newUsage')
                }
            };

            $.ajax({
                type: 'POST',
                url: '/user/auth/register',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                success: function(res, status, xhr) {
                    if (res && res.registered === true && res.uuidToken !== null) {
                        self.get('controllers.user').reloadUser();
                    } else if (res && res.registered === false && res.reason === "accountTaken") {
                        self.set('errorMessage', 'That account name is already taken. Please choose another one.');
                        self.set('accountNameIsUnique', false);
                    } else {
                        self.set('errorMessage', 'Unable to register account. Please try again later, or contact support.');
                    }
                },
                error: function(xhr, status, err) {

                }
            });
        } else {
            this.set('Please complete the registration from in order to register a new account');
        }
    },

    isErrorMessageShown: function() {
        return this.get('errorMessage') !== null;
    }.property('errorMessage'),

    canSendForm: function() {
        return this.get('accountNameIsUnique') === false && this.get('isErrorMessageShown') === false;
    }.property('accountNameIsUnique', 'isErrorMessageShown')
});
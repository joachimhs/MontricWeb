Montric.User = DS.Model.extend({
    userName: DS.attr('string'),
    accountName: DS.attr('string'),
    userRole: DS.attr('string'),
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    company: DS.attr('string'),
    country: DS.attr('string'),
    usage: DS.attr('string'),

    isNew: function() {
        return this.get('userRole') === 'activation';
    }.property('userRole'),

    isUser: function() {
        return this.get('userRole') === 'new' || this.get('userRole') === 'user' || this.get('userRole') === 'beta' || this.get('isAdmin') || this.get('isRoot');
    }.property('userRole'),

    isAdmin: function() {
        return this.get('userRole') === 'admin' || this.get('isRoot');
    }.property('userRole'),

    isAdminLevel: function() {
        return this.get('userRole') === 'admin' || this.get('isRoot');
    }.property('userRole'),

    isUserLevel: function() {
        return this.get('userRole') === 'user';
    }.property('userRole'),


    isRoot: function() {
        return this.get('userRole') === 'root';
    }.property('userRole'),

    isUnregistered: function() {
        return this.get('userRole') === 'notRegistered';
    }.property('userRole'),

    isNotAuthenticated: function() {
        return !(this.get('isUser') || this.get('isUnregistered'));
    }.property('userRole')
});
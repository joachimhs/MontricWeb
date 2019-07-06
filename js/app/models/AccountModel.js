Montric.Account = DS.Model.extend({
    accountType: DS.attr('string'),
    accessTokens: DS.attr('raw'),
    users: DS.attr('raw')
});
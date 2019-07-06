Montric.AlertRecipient = DS.Model.extend({
    accountName: DS.attr('string'),
    pluginName: DS.belongsTo('alertPlugin', {async: true}),
    recipients: DS.attr('raw'),

    selectedRecipients: []
});
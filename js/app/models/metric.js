Montric.Metric = DS.Model.extend({
    nodeType: DS.attr('string'),
    parent: DS.belongsTo('metric', {inverse: 'children', async: 'true'}),
    children: DS.hasMany('metric', {inverse: 'parent'}),
    chart: DS.belongsTo('chart', {async: true}),

    name: function() {
        var name = this.get('id');

        var id = this.get('id');
        if (id && id.indexOf(":") > 0) {
            name = id.substr(id.lastIndexOf(":")+1, id.length);
        }

        return name;
    }.property('id'),

    isSelected: false,
    isExpanded: false,
    isSelectedAdmin: false,
    isExpandedAdmin: false,

    hasChildren: function() {
        return this.get('children').get('length') > 0;
    }.property('children').cacheable(),

    isLeaf: function() {
        return this.get('children').get('length') === 0;
    }.property('children').cacheable(),

    isAlert: function() {
        return this.get('nodeType') === 'alert';
    }.property('nodeType')

});

Montric.Metric.reopenClass({
    compareNodes: function(nodeOne, nodeTwo) {
        if (nodeOne.get('id') > nodeTwo.get('id'))
            return 1;
        if (nodeOne.get('id') < nodeTwo.get('id'))
            return -1;
        return 0;
    }
});
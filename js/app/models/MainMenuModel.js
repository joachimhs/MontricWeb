Montric.MainMenu = DS.Model.extend({
    name: DS.attr('string'),
    nodeType: DS.attr('string'),
    parent: DS.belongsTo('mainMenu'),
    children: DS.hasMany('mainMenu'),
    chart: DS.belongsTo('chart'),

    isSelected: false,
    isExpanded: false,

    isSelectedAdmin: false,
    isExpandedAdmin: false,

    hasChildren: function() {
        return this.get('children').get('length') > 0;
    }.property('children'),

    isLeaf: function() {
        return this.get('children').get('length') === 0;
    }.property('children'),

    isAlert: function() {
        return this.get('nodeType') === 'alert';
    }.property('nodeType'),

    isExpandedObserver: function() {
        console.log('isExpanded: ' + this.get('id'));
        if (this.get('isExpanded')) {
            var children = this.get('children.content');
            if (children) {
                console.log('Sorting children');
                children.sort(Montric.MainMenu.compareNodes);
            }
        }
    }.observes('isExpanded')
});

Montric.MainMenu.reopenClass({
    compareNodes: function(nodeOne, nodeTwo) {
        if (nodeOne.get('id') > nodeTwo.get('id'))
            return 1;
        if (nodeOne.get('id') < nodeTwo.get('id'))
            return -1;
        return 0;
    }
});
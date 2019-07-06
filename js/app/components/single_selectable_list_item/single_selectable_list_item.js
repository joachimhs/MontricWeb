Montric.SingleSelectableListItemComponent = Ember.Component.extend({
    classNameBindings: ['active'],

    click: function() {
        console.log('CLICK: ' + this.get('node'));

        if (this.get('isSelected')) {
            this.set('selectedNode', null);
        } else {
            this.set('selectedNode', this.get('node'));
        }
    },

    isSelected: function() {
        var itemId = this.get('node.id');

        if (!itemId) {
            itemId = this.get('node');
        }

        var selectedNode = this.get('selectedNode');

        return selectedNode && selectedNode.get('id') === itemId;
    }.property('node.id', 'selectedNode.id')
});
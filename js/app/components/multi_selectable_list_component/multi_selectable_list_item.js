Montric.MultiSelectableListItemComponent = Ember.Component.extend({
    classNameBindings: ['active'],

    click: function() {
        console.log('CLICK: ' + this.get('node'));

        var alreadyIsSelected = this.get('isSelected');
        var selectedNodes = this.get('selectedNodes');

        var clickedId = this.get('node.id');

        if (!clickedId) {
            clickedId = this.get('node');
        }

        if (alreadyIsSelected) {
            selectedNodes.removeObject(clickedId);
        } else {
            console.log('pushing object: ' + clickedId);
            selectedNodes.pushObject(clickedId);
        }
    },

    isSelected: function() {
        var isSelected = false;

        var itemId = this.get('node.id');

        if (!itemId) {
            itemId = this.get('node');
        }

        var selectedNodes = this.get('selectedNodes');

        selectedNodes.forEach(function(selectedItem) {
            if (selectedItem === itemId) {
                isSelected = true;
            }
        });


        return isSelected;
    }.property('node.id', 'selectedNodes.length'),

    active: function() {
        var isSelected = false;
        var id = this.get('node.id');

        if (!id) {
            id = this.get('node');
        }

        if (this.get('selectedNodes')) {
            this.get('selectedNodes').forEach(function(selectedItem) {
                if (selectedItem === id) {
                    isSelected = true;
                }
            });
        }

        return isSelected;
    }.property('selectedNodes.length', 'node.id')
});
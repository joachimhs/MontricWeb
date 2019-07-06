Montric.CheckBoxComponent = Ember.Component.extend({
    actions: {
        doSelect: function() {
            this.toggleProperty('isSelected');
        }
    }
});
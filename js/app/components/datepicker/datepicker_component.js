Montric.DatePickerComponent = Ember.Component.extend({
    classNames: ['input-append date'],
    picker: null,


    didInsertElement: function() {
        console.log('DATE TIME PICKER');
        var elementId = this.get('elementId');
        var picker = Ember.$("#" + elementId).datetimepicker({
            pickTime: true
        }).data('datetimepicker');

        var self = this;
        Ember.$("#" + elementId).on("changeDate", function(e) {
           self.set('date', e.localDate);
        });

        this.set('picker', picker);
    },

    dateObserver: function() {
        var date = this.get('date');
        var picker = this.get('picker');

        console.log('DATE OBSERVER PICKER');
        console.log(date);
        console.log(picker);

        if (date && picker) {
            picker.setLocalDate(date);
        }
    }.observes('date', 'picker').on('init')
});
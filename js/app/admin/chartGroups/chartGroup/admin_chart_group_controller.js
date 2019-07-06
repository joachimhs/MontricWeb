Montric.AdminChartGroupsChartGroupController = Ember.ObjectController.extend({
    needs: ['admin'],

    actions: {
        doAddCheckedNodes: function () {
            console.log('doAddCheckedNodes');
            var selectedNodes = this.get('controllers.admin.selectedNodes');
            var selectedChartGroup = this.get('model');

            if (selectedChartGroup) {
                selectedNodes.forEach(function (node) {
                    var addGroup = true;
                    selectedChartGroup.get('chartGroups').forEach(function (existingGroup) {
                        console.log("existingGroup:");
                        console.log(existingGroup);
                        if (existingGroup.get('id') === node.get('id')) addGroup = false;
                    });

                    if (addGroup)
                        selectedChartGroup.get('chartGroups').pushObject(node);
                });
            } else {
                console.log('NO SELECTED CHART GROUP');
            }

            selectedNodes.setEach('isSelected', false);
        },

        doDeleteSelectedNodes: function() {
            var selectedNodes = this.get('selectedChartGroups');
            var chartGroups = this.get('chartGroups');

            chartGroups.forEach(function(chartGroup) {
                selectedNodes.forEach(function(selectedChartGroup) {
                    if (chartGroup.get('id') === selectedChartGroup) {
                        chartGroups.removeObject(chartGroup);
                    }
                });
            });


            this.set('selectedChartGroups', Ember.A());
        },

        doCommitChartGroup: function() {
            if (this.get('model')) {
                this.get('model').save();
            }
        }
    }
});

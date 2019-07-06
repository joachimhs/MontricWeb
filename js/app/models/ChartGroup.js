Montric.ChartGroup = DS.Model.extend({
    chartGroups: DS.hasMany('metric'),
    //chartGroups: DS.attr('raw'),
    selectedChartGroups: []
});
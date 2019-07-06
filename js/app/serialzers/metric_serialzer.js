Montric.MetricSerializer = DS.RESTSerializer.extend({
    // First, restructure the top-level so it's organized by type
    //extractSingle: function(store, type, payload, id) { }

    //Here, for any node of type "chart", we need to add the chart to the
    //chart property, so that Ember Data can resolve the belongsTo relationship
    normalize: function(payload) {
        console.log("NORMALIZING PAYLOAD");
        payload = this._super(payload); //Transform the payload using the standard normalizer


        if (payload.metrics) {
            payload.metrics.forEach(function(metric) {
                metric.chart = metric.id;

                /*if (metric.nodeType === "chart") {
                    metric.chart = metric.id;
                } else if (metric.nodeType === "alert") {
                    metric.chart = metric.id;
                } else if (metric.nodeType === "grouped_statistics") {
                    metric.chart = metric.id;
                }*/
            });
        }

        return payload;
    },

    // First, restructure the top-level so it's organized by type
    // and the comments are listed under a post's `comments` key.
    extractArray: function(store, type, payload) {
        console.log("EXTRACT ARRAY");
        var metrics = payload.metrics;

        metricCache = {};

        var alertsKey = "Alerts";
        var chartGroupKey = "Chart Groups";

        metricCache[alertsKey] = {"id": alertsKey, "name": "Alerts", "parent": null, "children": [], "nodeType": "generated"};
        metricCache[chartGroupKey] = {"id": chartGroupKey, "name": "Chart Groups", "parent": null, "children": [], "nodeType": "generated"};

        console.log('metrics before: ' + metrics.get('length'));

        metrics.forEach(function(metric) {
            if (metric.id && metric.id !== "null") {
                if (metric.nodeType && metric.nodeType === "alert") {
                    metricCache[alertsKey].children.pushObject(metric.id);
                    metric.parent = alertsKey;
                    metricCache[metric.id] = metric;
                } else if (metric.nodeType && metric.nodeType === "grouped_statistics") {
                    metricCache[chartGroupKey].children.pushObject(metric.id);
                    metric.parent = chartGroupKey;
                    metricCache[metric.id] = metric;
                } else if (metric.nodeType && metric.nodeType === "chart") {
                    metricCache[metric.id] = metric;


                    var metricId = metric.id;

                    while (metricId.indexOf(":") > 0) {
                        var parentId = metricId.substr(0, metricId.lastIndexOf(":"));
                        var parentObject = metricCache[parentId];

                        if (!parentObject || !parentObject.id) {
                            parentObject = { "id": parentId, children: [metricId], parent: null };
                            metricCache[parentId] = parentObject;
                        }

                        if (!parentObject.children) {
                            parentObject.children = [];
                        }

                        if (!parentObject.children.contains(metricId)) {
                            parentObject.children.pushObject(metricId);
                        }

                        var currMetric = metricCache[metricId];
                        if (currMetric) {
                            currMetric.parent = parentId;
                        } else {
                            currMetric = {"id": metricId, children: [], parent: parentId};
                            metricCache[metricId] = currMetric;
                        }

                        metricId = parentId;
                    }
                }
            }
        });

        var metricsArray = [];
        for (var m in metricCache) {
            metricsArray.pushObject(metricCache[m]);
        }

        console.log('metrics after: ' + metricsArray.get('length'));

        payload = { metrics: metricsArray};

        //console.log(JSON.stringify(payload));

        return this._super(store, type, payload);
    }
});

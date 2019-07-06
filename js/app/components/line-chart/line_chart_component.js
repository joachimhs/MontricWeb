Montric.LineChartComponent = Ember.Component.extend({
    classNames: ['chart'],
    resizeHandler: null,
    nvd3Chart: null,
    resizeTimeout: null,
    graph: null,

    serieObserver: function() {
        console.log('ChartView contentObserver!');
        var elementId = this.get('elementId');
        var series = this.get('chart.series');

        if (series) {
            var palette = new Rickshaw.Color.Palette( { scheme: "munin" } );

            series.forEach(function(serie) {
                if (!serie.color) {
                    serie.color = palette.color();
                }
            });

            var view = this;

            //Update chart with new series
            var graph = this.get('graph');
            if (graph && series) {
                for (var index = 0; index < graph.series.length; index++) {
                    if (series.length > index) {
                        graph.series[index] = series[index];
                    }
                }

                graph.update();
            }

            var resizeTimeout = this.get('resizeTimeout');
            $(window).resize(function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function() {
                    console.log("RESIZING WINDOW");
                    Ember.run(function() {
                        view.rerender();
                    });
                }, 100);
                view.set('resizeTimeout', resizeTimeout);
            });
        }

    }.observes('chart.series', 'chart.series.length').on('init'),

    willDestroyElement: function() {
        $(window).off("resize");

        var resizeTimeout = this.get('resizeTimeout');
        console.log("CLEARING TIMEOUT! " + resizeTimeout);
        clearTimeout(resizeTimeout);
    },

    didInsertElement : function() {
        console.log('ChartView didInsertElement');
        console.log(this.get('chart'));
        if (this.get('chart.series')) {
            var series = this.get('chart.series');

            var elementId = this.get('elementId');

            var viewElement = document.getElementById(elementId);

            var chartElement = document.createElement('div');
            chartElement.id = elementId + "_chart";
            chartElement.className = 'chart';
            viewElement.appendChild(chartElement);

            var legendContainerElement = document.createElement('div');
            legendContainerElement.id = elementId + "_legend_container";
            legendContainerElement.className = 'legend';
            chartElement.appendChild(legendContainerElement);

            var legendHeaderElement = document.createElement('div');
            legendHeaderElement.id = elementId + "_legend_header";
            legendHeaderElement.className = 'legend_header';
            legendHeaderElement.innerHTML = this.get('chart.name');
            legendContainerElement.appendChild(legendHeaderElement);

            var legendElement = document.createElement('div');
            legendElement.id = elementId + "_legend";
            legendContainerElement.appendChild(legendElement);

            var sliderElement = document.createElement('div');
            sliderElement.id = elementId + "_slider";
            viewElement.appendChild(sliderElement);

            var thisView = this;

            console.log('CONTROLLER: ' + this.get('numCharts') + " : " + this.$().height());
            console.log(this.$());
            var numCharts = this.get('numCharts');

            var height = (this.$().height() / numCharts) - (numCharts * 2);
            var width = this.$().width();

            console.log('height: ' + height + ' width: ' + width);

            $("#" + elementId).css('height', height + 'px');
            $("#" + elementId).css('width', width + 'px');


            var graph = new Rickshaw.Graph( {
                element: document.getElementById(elementId + "_chart"),
                width: width,
                height: height,
                renderer: 'lineplot',
                series: series,
                min: 0
            } );

            var legend = new Rickshaw.Graph.Legend( {
                graph: graph,
                element: document.getElementById(elementId + '_legend')

            } );

            var Hover = Rickshaw.Class.create(Rickshaw.Graph.HoverDetail, {

                render: function(args) {

                    var graph = this.graph;

                    var points = args.points;
                    var point = points.filter( function(p) { return p.active; } ).shift();

                    if (point.value.y === null) return;

                    var hoverHtml = '<span class="date">' + new Date(point.value.x).toUTCString() + '</span><br />';

                    args.detail.sort(function(a, b) { return a.order - b.order; }).forEach( function(d) {
                        if (!d.series.color) {
                            d.series.color = "#191990";
                        }
                        hoverHtml += '<span class="detail_swatch" style="background-color: ' + d.series.color + '"></span>';
                        hoverHtml += d.name + ": " + d.formattedYValue + "<br />";
                    });

                    var formattedXValue = point.formattedXValue;
                    var formattedYValue = point.formattedYValue;

                    this.element.innerHTML = '';
                    this.element.style.left = graph.x(point.value.x) + 'px';

                    var xLabel = document.createElement('div');

                    xLabel.className = 'x_label';
                    xLabel.innerHTML = formattedXValue;
                    this.element.appendChild(xLabel);

                    var item = document.createElement('div');
                    item.id = elementId + "_hoverdiv";
                    item.className = 'item';

                    // invert the scale if this series displays using a scale
                    var series = point.series;
                    var actualY = series.scale ? series.scale.invert(point.value.y) : point.value.y;

                    item.innerHTML = hoverHtml;//this.formatter(series, point.value.x, actualY, formattedXValue, formattedYValue, point);
                    item.style.top = this.graph.y(point.value.y0 + point.value.y) + 'px';

                    this.element.appendChild(item);

                    var dot = document.createElement('div');

                    dot.className = 'dot';
                    dot.style.top = item.style.top;
                    dot.style.borderColor = series.color;

                    this.element.appendChild(dot);

                    if (point.active) {

                        dot.className = 'dot active';
                    }

                    this.show();

                    if (typeof this.onRender == 'function') {
                        this.onRender(args);
                    }

                    var rightArrow = this.graph.x(point.value.x) > (width / 2);
                    var bottomArrow = this.graph.y(point.value.y) > (height / 2);
                    var itemWidth = $('#' + elementId + "_hoverdiv").outerWidth();
                    var itemHeight = $('#' + elementId + "_hoverdiv").outerHeight();


                    if (rightArrow && bottomArrow) {
                        item.className = 'item rightitemBottom active';
                        $('#' + elementId + "_hoverdiv").css({
                            left: $('#' + elementId + "_hoverdiv").position().left - itemWidth - 25 + "px",
                            top: $('#' + elementId + "_hoverdiv").position().top - itemHeight + 25 + "px"
                        });
                    } else if (rightArrow && !bottomArrow) {
                        item.className = 'item rightitem active';
                        $('#' + elementId + "_hoverdiv").css({
                            left: $('#' + elementId + "_hoverdiv").position().left - itemWidth - 25 + "px"
                        });
                    } else if (!rightArrow && bottomArrow) {
                        item.className = 'item leftitemBottom active';
                        $('#' + elementId + "_hoverdiv").css({
                            top: $('#' + elementId + "_hoverdiv").position().top - itemHeight + 25 + "px"
                        });
                    } else if (!rightArrow && !bottomArrow) {
                        item.className = 'item leftitem active';
                    }
                }
            });

            var hover = new Hover( { graph: graph } );

            var shelving = new Rickshaw.Graph.Behavior.Series.Toggle( {
                graph: graph,
                legend: legend
            } );

            var highlight = new Rickshaw.Graph.Behavior.Series.Highlight( {
                graph: graph
            });

            var axes = new Rickshaw.Graph.Axis.X( {
                graph: graph,
                ticks: 9,
                tickFormat: function(x) {
                    return dateFormat(x, "dd/mm HH:MM:ss");
                }
            } );

            var y_ticks = new Rickshaw.Graph.Axis.Y( {
                graph: graph,
                tickFormat: Rickshaw.Fixtures.Number.formatKMBT
            } );
            y_ticks.render();
            axes.render();

            graph.render();

            this.set('graph', graph);
        }
    }
});

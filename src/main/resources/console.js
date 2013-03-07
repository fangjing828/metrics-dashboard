var pageloaded = function () {
    $("#date").append(new Date().toString());

    var chartsDiv = $(".chart")
    for (i = 0; i < chartsDiv.length; i++) {
        var div = chartsDiv[i];
        var data = eval("(" + div.getAttribute("data") + ")");
        var labels = eval("(" + div.getAttribute("labels") + ")");
        var name = div.getAttribute("name");
        var id = div.getAttribute("id");
        displayChart(id, name, labels, data);
    }
}


displayChart = function (id, name, l, data) {

    $.jqplot(id, data, {
        seriesColors: [ "#37CC37", "#FF4545", "#468cfe", "#ff8339"],
        seriesDefaults: {
            lineWidth: 2,
            shadow: false,
            markerOptions: {
                shadow: false,
                size: 6,
                style: 'circle'
            }
        },
        title: name,
        highlighter: {show: true},
        axes: {xaxis: {renderer: $.jqplot.DateAxisRenderer, tickOptions: {formatString: '%H:%M:%S'}}},
        legend: {
            show: true,
            location: 'e',
            labels: l
        },
        grid: {
            drawGridLines: true,        // wether to draw lines across the grid or not.
            gridLineColor: '#eee',    // *Color of the grid lines.
            background: '#f9f9f9',      // CSS color spec for background color of grid.
            borderColor: '#eee',     // CSS color spec for border around grid.
            borderWidth: 1.0,           // pixel width of border around grid.
            shadow: false,               // draw a shadow for grid.
            shadowAngle: 45,            // angle of the shadow.  Clockwise from x axis.
            shadowOffset: 1.5,          // offset from the line of the shadow.
            shadowWidth: 3,             // width of the stroke for the shadow.
            shadowDepth: 3,             // Number of strokes to make when drawing shadow.
            // Each stroke offset by shadowOffset from the last.
            shadowAlpha: 0.07,           // Opacity of the shadow
            renderer: $.jqplot.CanvasGridRenderer,  // renderer to use to draw the grid.
            rendererOptions: {}         // options to pass to the renderer.  Note, the default
        }
    });
}

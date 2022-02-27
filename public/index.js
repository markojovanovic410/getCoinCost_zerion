var chart = new CanvasJS.Chart('chartContainer', {
  animationEnabled: true,
  backgroundColor: "transparent",
  lineColor: "red",
  title: {
    text: 'Simple Line Chart',
  },
  axisX:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
  },
  axisY:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
  },
  data: [
    {
      type: 'spline',
      lineColor: "#ffaa00",
      color: "#ffaa00",
      indexLabelFontSize: 16,
      dataPoints: [
        { y: 450 },
        { y: 414 },
        {
          y: 520,
        },
        { y: 460 },
        { y: 450 },
        { y: 500 },
        { y: 480 },
        { y: 480 },
        {
          y: 410,
        },
        { y: 500 },
        { y: 480 },
        { y: 510 },
      ],
    },
  ],
})
chart.render()

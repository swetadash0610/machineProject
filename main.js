// var chart = new CanvasJS.Chart("chartContainer", {
//   title: {
//     text: "V curve of Synchronous Machine",
//   },
//   axisY: {
//     minimum: 10,
//   },
//   data: [
//     {
//       type: "spline",
//       dataPoints: [{ x: 0, y: 50 }],
//     },
//     {
//       type: "spline",
//       dataPoints: [
//       { x: 10, y: 31 },
//       { x: 20, y: 35},
//       { x: 30, y: 30 },
//       { x: 40, y: 35 },
//       { x: 50, y: 35 },
//       { x: 60, y: 38 },
//       { x: 70, y: 38 },
//       { x: 80, y: 34 },
//       { x: 90, y: 44}

//       ]
//     },
//   ],
// });
// chart.render();

// function findY(x1, x2, angle) {
//   return (x2 - x1) * Math.atan((angle * Math.PI) / 180);
// }

// //Function for add data-point
// document.getElementById("addDataPoint").onclick = function () {
//   var dps = chart.options.data[0].dataPoints;
//   var angle = parseInt(document.getElementById("angle").value);
//   var yValue =
//     findY(dps[dps.length - 1].x, dps[dps.length - 1].x + 1, angle) +
//     dps[dps.length - 1].y;
//   if (yValue || yValue === 0) {
//     chart.options.data[0].dataPoints.push({
//       x: dps[dps.length - 1].x + 1,
//       y: yValue,
//     });
//     chart.axisY[0].set("maximum", yValue);
//   }

//   chart.render();
// };

window.onload = function () {
  var dataPoints1 = [];
  var dataPoints2 = [];
  var dataPoints3 = [];

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    zoomEnabled: true,
    legend:{
      cursor:"pointer",
      itemclick : toggleDataSeries
    },
    title: {
      text: "V curve of Synchronous Machine",
    },
    data: [
      {
        type: "spline",
        name: "No Load",
        showInLegend: true,
        dataPoints: dataPoints1,
      },
      {
        type: "spline",
        name: "300 W Load",
        showInLegend: true,
        dataPoints: dataPoints2,
      },
      {
        type: "spline",
        name: "500 W Load",
        showInLegend: true,
        dataPoints: dataPoints3,
      },
    ],
    
  });
  $.getJSON("./data.JSON", function (data) {
    console.log(data);
    $.each(data, function (key, value) {
      value.forEach((v, i) => {
        if (key === 0) {
          dataPoints1.push({ x: v[0], y: parseInt(v[1]) });
        }
        if (key === 1) {
          dataPoints2.push({ x: v[0], y: parseInt(v[1]) });
        }
        if (key === 2) {
          dataPoints3.push({ x: v[0], y: parseInt(v[1]) });
        }
      });
    });
    chart.render();
  });
  function toggleDataSeries(e) {
    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    chart.render();
  }
};

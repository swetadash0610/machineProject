// window.onload = function () {
//   var dataPoints1 = [];
//   var dataPoints2 = [];
//   var dataPoints3 = [];

//   var chart = new CanvasJS.Chart("chartContainer", {
//     animationEnabled: true,
//     zoomEnabled: true,
//     legend:{
//       cursor:"pointer",
//       itemclick : toggleDataSeries
//     },
//     title: {
//       text: "V curve of Synchronous Machine",
//     },
//     data: [
//       {
//         type: "spline",
//         name: "No Load",
//         showInLegend: true,
//         dataPoints: dataPoints1,
//       },
//       {
//         type: "spline",
//         name: "300 W Load",
//         showInLegend: true,
//         dataPoints: dataPoints2,
//       },
//       {
//         type: "spline",
//         name: "500 W Load",
//         showInLegend: true,
//         dataPoints: dataPoints3,
//       },
//     ],
    
//   });
//   $.getJSON("./data.JSON", function (data) {
//     console.log(data);
//     $.each(data, function (key, value) {
//       value.forEach((v, i) => {
//         if (key === 0) {
//           dataPoints1.push({ x: v[0], y: parseInt(v[1]) });
//         }
//         if (key === 1) {
//           dataPoints2.push({ x: v[0], y: parseInt(v[1]) });
//         }
//         if (key === 2) {
//           dataPoints3.push({ x: v[0], y: parseInt(v[1]) });
//         }
//       });
//     });
//     chart.render();
//   });
//   function toggleDataSeries(e) {
//     if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
//       e.dataSeries.visible = false;
//     } else {
//       e.dataSeries.visible = true;
//     }
//     chart.render();
//   }
// };

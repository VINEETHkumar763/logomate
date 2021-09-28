var barChartData = {
    labels: [
      "1 Aug",
      "2 Aug",
      "3 Aug",
      "4 Aug",
      "5 Aug",
      "6 Aug",
      "7 Aug"
    ],
    datasets: [
      {
        label: "Author",
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
        data: [24,38,58,44,62,42,62]
      },
   
      {
        label: "Customer",
        backgroundColor: "white",
        borderColor: "green",
        borderWidth: 1,
        data: [32,42,62,48,74,46,74]
      },
     
    ]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      // text: "Chart.js Bar Chart"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions
    });
  };
  
function generateChart() {
    const chartType = document.getElementById('chartType').value;
  
    const salesData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Ventas por Mes',
        backgroundColor: '#ffc107',
        borderColor: '#ffc107',
        borderWidth: 1,
        data: [
          document.getElementById('jan').value,
          document.getElementById('feb').value,
          document.getElementById('mar').value,
          document.getElementById('apr').value,
          document.getElementById('may').value
        ],
      }]
    };
  
    const ctx = document.getElementById('salesChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: chartType,
      data: salesData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50
            }
          }
        }
      }
    });
  }
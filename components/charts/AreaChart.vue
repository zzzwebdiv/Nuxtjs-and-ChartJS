<template>
    <div class="p-2 border border-gray-500 mt-4">
      <label class="block mb-2 font-weight-bold text-h5 grey--text text--darken-2">
        Area Chart
      </label>
      <client-only>
        <area-chart v-bind:chartData='chartData' v-bind:chartOptions='chartOptions' chart-id='myAreaChart' />
      </client-only>
    </div>
  </template>
  
  <script>
  
  export default {
    data: () => ({
      chartData: {
        labels: ['January', 'February', 'March'],
        datasets: [{
            label: 'Reported Issues',
            data: [34, 20, 12],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
            borderWidth: 1,
          },
          {
            label: 'Fix Issues',
            fill: true,
            data: [24, 12, 12],
            backgroundColor:'rgb(54, 162, 235)',
            borderColor: [
              'rgb(54, 82, 235)',],
            borderWidth: 1,
            
          }
        ]
      },
      chartOptions: {
        responsive: true,
        legend: { display: false },
        title: {
          display: false,
          text: 'Monthly Report',
          fontSize: 24,
          fontColor: '#6b7280',
          position: 'top',
          align: 'start',
        },
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        },
        tension: 0.3
      }
  
    }),
  }
  </script>
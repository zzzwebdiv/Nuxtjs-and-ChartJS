<template>
    <div class="p-2 border border-gray-500 mt-4">
      <label class="block mb-2 font-weight-bold text-h5 grey--text text--darken-2">
        Radar Chart
      </label>
      <client-only>
        <radar-chart v-bind:chartData='chartData' v-bind:chartOptions='chartOptions' chart-id='myAreaChart' />
      </client-only>
    </div>
  </template>
  
  <script>
  
  export default {
    data: () => ({
      chartData: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [
          {
            label: 'December',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: 'origin',
            backgroundColor: ['rgba(255, 99, 132, 0.2)',],
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }, {
            label: 'January',
            data: [28, 48, 40, 19, 96, 27, 100],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
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
        
      }
  
    }),
  }
  </script>
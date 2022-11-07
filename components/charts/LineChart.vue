<template>
  <div class="p-2 border border-gray-500 mt-4">
    <label class="block mb-2 font-weight-bold text-h5 grey--text text--darken-2">
      Line Chart
    </label>
    <client-only>
      <line-chart v-bind:chartData='chartData' v-bind:chartOptions='chartOptions' chart-id='mysecondChart' />
    </client-only>
  </div>
</template>

<script>

export default {
  data: () => ({
    chartData: {
      labels: ['January', 'February', 'March'],
      datasets: [{
        label: 'My Second Dataset',
        data: [40, 20, 12],
        borderColor: [
          'rgb(54, 162, 235)',],
        borderWidth: 1,
      }]
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
<template>
  <div class="p-2 border border-gray-500 mt-4">
    <label
      class="block mb-2 font-weight-bold text-h5 grey--text text--darken-2"
    >
      Doughnut Chart
    </label>

    <client-only>
      <doughnut-chart v-bind:chartData='chartData' v-bind:chartOptions='chartOptions' />
    </client-only>
  </div>
</template>
  
<script>
export default {
  computed: {
    chartData() {
      return {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 10,
        labels: ['Green', 'Red', 'Blue'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            data: [1, 10, 5],
            hoverOffset: 4,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false
      };
    },
  },
};
</script>
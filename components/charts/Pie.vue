<template>
  <div class="p-2 border border-gray-500 mt-4">
    <label
      class="block mb-2 font-weight-bold text-h5 grey--text text--darken-2"
    >
      Pie Chart
    </label>

    <client-only>
      <PieChart :data="chartData" :options="chartOptions" />
    </client-only>
  </div>
</template>
    
<script>
export default {
  computed: {
    chartData() {
      return {
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 12,
          },
        ],
      };
    },
    chartOptions() {
      return {
        hoverBorderWidth: 90,
      };
    },
  },
};
</script>
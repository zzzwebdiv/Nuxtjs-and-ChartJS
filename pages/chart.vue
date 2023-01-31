<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="4" sm="6">
          <ChartsBarChart />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <ChartsLineChart />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <ChartsDoughnutChart />
        </v-col>
        
      </v-row>
      <v-row>
        <v-col cols="12" md="4" sm="6">
          <ChartsAreaChart />
        </v-col>
        <v-col cols="12" md="4" sm="6">
          <ChartsRadarChart />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
export default {
  layout: "dashboard",
  data: () => ({}),
};
</script>
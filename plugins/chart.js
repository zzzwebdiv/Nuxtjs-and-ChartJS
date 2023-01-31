import Vue from "vue";
import { Bar, Line, Doughnut, PolarArea, Radar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  ArcElement,
  RadialLinearScale,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement,
  RadialLinearScale,
  Filler,
);

Vue.component("bar-chart", {
  extends: Bar,
});

Vue.component("line-chart", {
  extends: Line,
});

Vue.component("doughnut-chart", {
  extends: Doughnut,
});

Vue.component("area-chart",{
  extends: Line,
})

Vue.component("radar-chart",{
  extends: Radar,
})


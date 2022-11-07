import Vue from "vue";
import { Bar, Line, Doughnut } from 'vue-chartjs'
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


<template>
  <Bar v-if="initialized" :chart-data="chartData" />
</template>

<script>
import { Bar } from "vue-chartjs/legacy";
import { mapGetters, mapActions } from "vuex";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "Chart",
  components: { Bar },
  data() {
    return {
      initialized: false,
      chartData: {
        labels: [],
        datasets: [
          {
            label: "My costs",
            data: [],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
              "rgb(184, 255, 51)",
              "rgb(255, 51, 255)",
              "rgb(51, 246, 255)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    };
  },
  methods: {
    ...mapGetters([
      "getCategoryList",
      "getFullPaymentValueFood",
      "getFullPaymentValueSport",
      "getFullPaymentValueE",
      "getFullPaymentValueI",
      "getFullPaymentValueT",
      "getFullPaymentValueEnt",
    ]),
    ...mapActions(["fetchCategoryList", "fetchData"]),
  },
  async mounted() {
    await this.fetchCategoryList();
    await this.fetchData();
    this.chartData.labels = this.getCategoryList();
    this.chartData.datasets[0].data = [
      this.getFullPaymentValueSport(),
      this.getFullPaymentValueFood(),
      this.getFullPaymentValueE(),
      this.getFullPaymentValueI(),
      this.getFullPaymentValueT(),
      this.getFullPaymentValueEnt(),
    ];

    this.initialized = true;
  },
};
</script>

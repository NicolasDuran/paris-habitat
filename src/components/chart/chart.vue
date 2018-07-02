<template>
    <div class="graf" >
        <line-chart :chartData="this.chartData" :options="this.chartOptions"></line-chart>
    </div>
</template>
<script>
import LineChart from "./LineChart";
//import moment from "moment";
//import axios from "axios";

export default {
  name: "Charts",
  components: {
    LineChart
  },
  mounted() {
    this.changeGraphDate();
  },
  methods: {
    async changeGraphDate() {
      //        const response = await axios.get('/api/oapps/parking/occupationPerTime/' + dateFrom + '/' + dateTo);
      //        const res = response.data;
      const newChartData = Object.assign({}, this.chartData);
      newChartData.datasets[0].data = [1, 2, 3, 4, 5, 6];
      newChartData.labels = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin"];
      this.chartData = newChartData;
    }
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Electricité",
            backgroundColor: "#0000FF",
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },

        animation: {
          duration: 1000
        },
        legend: {
          display: false
        },
        layout: {
          display: false
        }
      }
    };
  }
};
</script>

<style scoped>
.graf {
  cursor: pointer;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  justify-content: space-evenly;
  background: white;
  -webkit-filter: drop-shadow(0px 5px 2px #0000001d);
  filter: drop-shadow(0px 5px 2px #0000001d);
  height: 242px;
  padding: 5px;
  padding-top: 10px;
  border-radius: 5px;
}

.charts {
  margin-right: 5px;
}
</style>

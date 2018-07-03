<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['height', 'type'],
  data: {
    labelsYear: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jui', 'Aou', 'Sept', 'Oct', 'Nov', 'Dec'],
    labelsMonth: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    labelsWeek: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    labelsDay: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
  },
  watch: {
    type: () => {
      this.draw()
    }
  },
  methods: {
    draw() {
      const brandSuccess = getStyle('--success') || '#4dbd74'
      const brandInfo = getStyle('--info') || '#20a8d8'
      const brandDanger = getStyle('--danger') || '#f86c6b'

      let elements = 27;
      const data1 = [];
      const data2 = [];
      const data3 = [];

      for (let i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65)
      }
      let labels;
      alert(this.type);
      if (this.type === 'Day') {
        labels = this.labelsMonth;
      }
      else if (this.type === 'Week') {
        labels = this.labelsWeek;
      }
      else if (this.type === 'Month') {
        labels = this.labelsMonth;
      }
      else if (this.type === 'Year') {
        labels = this.labelsYear;
      }
      this.renderChart({
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: hexToRgba(brandInfo, 10),
            borderColor: brandInfo,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data1
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'transparent',
            borderColor: brandSuccess,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 2,
            data: data2
          },
          {
            label: 'My Third dataset',
            backgroundColor: 'transparent',
            borderColor: brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5],
            data: data3
          }
        ]
      }, {
        tooltips: {
          enabled: false,
          custom: CustomTooltips,
          intersect: true,
          mode: 'index',
          position: 'nearest',
          callbacks: {
            labelColor: function (tooltipItem, chart) {
              return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
          }
        },
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      })
    }
  },
  mounted () {
    this.draw();
  }
}
</script>

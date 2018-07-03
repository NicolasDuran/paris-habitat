<script src="../router.js">
</script>
<template>
    <b-card>
        <b-row>
            <b-col sm="5">
                <b-button-toolbar class="float-left" aria-label="Toolbar with buttons group">
                    <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="energyTypeChart" name="radiosBtn">
                        <b-form-radio class="mx-0" value="eau">Eau</b-form-radio>
                        <b-form-radio class="mx-0" value="elec">Electricité</b-form-radio>
                    </b-form-radio-group>
                </b-button-toolbar>
            </b-col>
            <b-col sm="7" class="d-none d-md-block">
                <b-button-toolbar class="float-right" aria-label="Toolbar with buttons group">
                    <b-form-radio-group class="mr-3" id="radiosBtn" buttons button-variant="outline-secondary" v-model="selected" name="radiosBtn">
                        <b-form-radio class="mx-0" value="Day">Jour</b-form-radio>
                        <b-form-radio class="mx-0" value="Week">Mois</b-form-radio>
                        <b-form-radio class="mx-0" value="Month">Mois</b-form-radio>
                        <b-form-radio class="mx-0" value="Year">Année</b-form-radio>
                    </b-form-radio-group>
                </b-button-toolbar>
            </b-col>
        </b-row>
        <day-elec-chart v-if="selected=='Day' && energyTypeChart=='elec'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></day-elec-chart>
        <week-elec-chart v-if="selected=='Week' && energyTypeChart=='elec'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></week-elec-chart>
        <month-elec-chart v-if="selected=='Month' && energyTypeChart=='elec'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></month-elec-chart>
        <year-elec-chart v-if="selected=='Year' && energyTypeChart=='elec'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></year-elec-chart>

        <day-water-chart v-if="selected=='Day' && energyTypeChart=='eau'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></day-water-chart>
        <week-water-chart v-if="selected=='Week' && energyTypeChart=='eau'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></week-water-chart>
        <month-water-chart v-if="selected=='Month' && energyTypeChart=='eau'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></month-water-chart>
        <year-water-chart v-if="selected=='Year' && energyTypeChart=='eau'" chartId="main-chart-01" class="chart-wrapper" style="height:300px;margin-top:40px;" height="300"></year-water-chart>

        <div slot="footer">
            <b-row class="text-center" v-if="energyTypeChart=='elec'">
                <b-col class="mb-sm-2 mb-0">
                    <div class="text-muted">Chauffage</div>
                    <strong>44 kWh Users (44%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" variant="danger" :value="44"></b-progress>
                </b-col>
                <b-col class="mb-sm-2 mb-0 d-md-down-none">
                    <div class="text-muted">Refroidissement</div>
                    <strong>18 kWh (18%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" variant="warning" :value="18"></b-progress>
                </b-col>
                <b-col class="mb-sm-2 mb-0">
                    <div class="text-muted">Eau chaude sanitaire</div>
                    <strong>10 kWh (10%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="10"></b-progress>
                </b-col>
                <b-col class="mb-sm-2 mb-0">
                    <div class="text-muted">Prises electriques</div>
                    <strong>12 kWh (12%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="12"></b-progress>
                </b-col>
                <b-col class="mb-sm-2 mb-0 d-md-down-none">
                    <div class="text-muted">Autre</div>
                    <strong>14 kWh (14%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" :value="14"></b-progress>
                </b-col>
            </b-row>
            <b-row class="text-center" v-if="energyTypeChart=='eau'">
                <b-col class="mb-sm-2 mb-0">
                    <div class="text-muted">Eau froide</div>
                    <strong>74 kWh Users (74%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" variant="success" :value="74"></b-progress>
                </b-col>
                <b-col class="mb-sm-2 mb-0 d-md-down-none">
                    <div class="text-muted">Eau chaude</div>
                    <strong>26 kWh (26%)</strong>
                    <b-progress height={} class="progress-xs mt-2" :precision="1" variant="info" :value="26"></b-progress>
                </b-col>
            </b-row>
        </div>
    </b-card>
</template>

<style>

</style>

<script>
  import DayElecChart from './DayElecChart.vue'
  import WeekElecChart from './WeekElecChart.vue'
  import MonthElecChart from './MonthElecChart.vue'
  import YearElecChart from './YearElecChart.vue'

  import DayWaterChart from './DayWaterChart.vue'
  import WeekWaterChart from './WeekWaterChart.vue'
  import MonthWaterChart from './MonthWaterChart.vue'
  import YearWaterChart from './YearWaterChart.vue'

  export default {
    name: "PageQuiz",
    components: {
      DayElecChart,
      WeekElecChart,
      MonthElecChart,
      YearElecChart,
      DayWaterChart,
      WeekWaterChart,
      MonthWaterChart,
      YearWaterChart
    },
    data() {
      return {
        energyTypeChart: 'elec',
        selected: 'Month'
      };
    },
  };
</script>

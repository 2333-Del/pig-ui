<template>
  <div class="xpanel-wrapper xpanel-wrapper-60">
    <div class="xpanel xpanel-l-b">
      <div class="title">{{title}}</div>
<!--      <el-button type="info" :loading-icon="Eleme" loading>{{title}}</el-button>-->
      <div class="BarChart" id="barchart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

export default {
  name: 'left2',
  data() {
    return {
      title: '24小时湿度监测',
      chart: null
    }
  },
  mounted() {
    this.init_chart(this.chart)
  },
  methods: {
    init_chart(c) {
      c = document.getElementById('barchart')
      const chart = echarts.init(c, 'dark')
      let animationDuration = 6000
      const option = {
        title: {
          text: ''//标题可以不要
        },
        tooltip: {},
        legend: {},
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: {
          type: 'value',
          position: 'left',
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value} % '
          },
          series: [{
            backgroundStyle: {
              color: 'rgba(180, 183, 180, 03)'
            },
            name: '湿度',
            yAxisIndex: 1,
            type: 'bar',
            data: [60, 70, 80, 50, 60, 70, 80, 50, 60, 70],
            animationDuration
          }]
        }
      }
      chart.setOption(option)
    }
  }
}
</script>

<style scoped>
.BarChart {
  margin-top: 5%;

  height: 400px;
  width: auto;
}
</style>

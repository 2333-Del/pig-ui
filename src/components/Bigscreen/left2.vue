<template>
  <div class="xpanel-wrapper xpanel-wrapper-60">
    <div class="xpanel xpanel-l-b">
      <div class="title">{{ title }}</div>
      <!--      <el-button type="info" :loading-icon="Eleme" loading>{{title}}</el-button>-->
      <div class="BarChart" id="barchart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'
let a = 20
export default {
  name: 'left2',
  data() {
    return {
      title: '24小时湿度监测',
      chart: null,
      t1 :null,
      t2 :null,
      n:0,
      chartData:this.msg
    }
  },
  props:['msg'],
  mounted() {
    this.init_chart(this.chart);

    let t2 = setInterval(this.init_chart,5000);
  },
  methods: {
    rannum() {
      let n = Math.random() * 20 + 30;
      console.log(n);
      return n;
    },
    init_chart(c) {
      c = document.getElementById('barchart')
      let chart = echarts.init(c, 'light')
      let animationDuration = 6000
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer:{
            type:"shadow",
          }
        },
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5'],
          axisLine: {
            lineStyle: {
              color: 'rgb(255,255,255)'
            }
          }
        },
        yAxis: {
          type: 'value',
          position: 'left',
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(255,255,255)'
            }
          }
        },
        series: [
          {
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            type: 'bar',
            data: [this.rannum(), this.rannum(), this.rannum(), this.rannum(), this.rannum()],
            animationDuration
          }
        ]
      }
      chart.setOption(option);
    },
  },
  beforeDestroy() {
    clearInterval(this.t1);
    clearInterval(this.t2);
  },
}
</script>

<style scoped>
.BarChart {
  margin-top: 5%;

  height: 400px;
  width: auto;
}
</style>

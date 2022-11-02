<template>
  <div class="xpanel-wrapper xpanel-wrapper-60">
    <div class="xpanel xpanel-l-b">
      <!--      <div class="title">{{ humidity }}</div>-->
      <div class="title">{{ title }}</div>
      <!--      <el-button type="info" :loading-icon="Eleme" loading>{{title}}</el-button>-->
      <div id="barchart" class="BarChart"></div>

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {getChartData} from "@/api/pig/bigscreen"

require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'
let a = 20
export default {
  name: 'left2',
  data() {
    return {
      title: '24小时湿度监测',
      chart: null,
      t1: null,
      t2: null,
      n: 0,
      humidity: [],
      time: [],
    }
  },

  mounted() {

    this.init_chart(this.chart);
    this.t1 = setInterval(this.init_chart, 5000);

    //vue实例被加载出来 后执行
  },
  created() {

  },
  methods: {
    init_chart(c) {
      this.initChartData();
      c = document.getElementById('barchart')
      let chart = echarts.init(c, 'light')
      let animationDuration = 6000
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: "shadow",
          }
        },
        xAxis: {
          type: 'category',
          data: this.time,
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
          max:100,
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(255,255,255)'
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [
          {
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            },
            type: 'bar',
            data: this.humidity,
            animationDuration
          }
        ]
      }
      chart.setOption(option);
    },
    initChartData() {
      getChartData().then(response => {
        this.humidity.length = 0
        this.time.length = 0
          var hum = [];
          hum = response.data.humidity;
          for (var i = 0; i < hum.length; i++) {
            this.humidity.push(hum[i].value)
            this.time.push(hum[i].time)
          }
        }
      );
    }
  },

  beforeDestroy() {
    clearInterval(this.t1);
  },

}
</script>

<style scoped>
.BarChart {
  /* margin-top: 5%; */
  height: 400px;
  width: auto;
}
</style>

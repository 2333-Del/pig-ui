<template>
  <div class="xpanel-wrapper xpanel-wrapper-40">
    <div class="xpanel xpanel-l-t">
      <div class="title">{{ title }}</div>
      <!--      <el-button type="" :loading-icon="Eleme" loading>{{title}}</el-button>-->
      <div class="LineChart" id="linechart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {getChartData } from  "@/api/pig/bigscreen"

require('echarts/theme/macarons')

export default {
  name: 'right1',
  data() {
    return {
      title: '24小时温度检测',
      chart: null,
      temperature:[],
      time:[],
    }
  },
  mounted() {
    this.initChartData();
    this.init_chart(this.chart)
    let t2 = setInterval(this.init_chart,5000);
  },
  methods: {
    init_chart(c) {
      console.log(this.temperature)
      c = document.getElementById('linechart')
      const chart = echarts.init(c, 'light')
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer:{
            type:"shadow",
          }
        },
        xAxis: {
          nameTextStyle: {
            color: 'rgb(0,95,255)'
          },
          type: 'category',
          // data: this.time,
          data: ['1', '2', '2', '3', '4', '5', '6', '7', '8', '9', '10','12'],
          axisLine: {
            lineStyle: {
              color: 'rgb(255,255,255)'
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: 'rgb(255,255,255)'
            }
          }
        },
        series: [
          {
            // data: this.temperature,
            data: [11, 22, 23, 24, 25, 56, 27, 28, 29, 22,29,10,33],
            type: 'line',
            smooth: true
          }
        ]
      }
      chart.setOption(option)
    },
    //初始话数据
    initChartData(){
      getChartData().then(response => {
          var tem = [];
          tem = response.data.temperature;
          for (var i = 0; i < tem.length; i++) {
            this.temperature.push(tem[i].value)
            this.time.push(tem[i].time)
          }
        }
      );
    },
  },

}

// option = {
//   title: {
//     text: ''
//   },
//   tooltip: {
//     trigger: 'axis'
//   },
//   legend: {},
//   toolbox: {
//     show: true,
//     feature: {
//       dataZoom: {
//         yAxisIndex: 'none'
//       },
//       dataView: { readOnly: false },
//       magicType: { type: ['line', 'bar'] },
//       restore: {},
//       saveAsImage: {}
//     }
//   },
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value',
//     axisLabel: {
//       formatter: '{value} °C'
//     }
//   },
//   series: [
//     {
//       name: 'Highest',
//       type: 'line',
//       data: [10, 11, 13, 11, 12, 12, 9],
//       markPoint: {
//         data: [
//           { type: 'max', name: 'Max' },
//           { type: 'min', name: 'Min' }
//         ]
//       },
//       markLine: {
//         data: [{ type: 'average', name: '平均气温' }]
//       }
//     },
//
//   ]
// };

</script>

<style scoped>
.LineChart {
  margin-top: 1%;
  height: 300px;
  width: auto;
}
</style>

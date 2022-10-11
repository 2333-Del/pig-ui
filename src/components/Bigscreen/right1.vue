<template>
  <div class="xpanel-wrapper xpanel-wrapper-40">
    <div class="xpanel xpanel-l-t">
      <div class="title">{{title}}</div>
<!--      <el-button type="" :loading-icon="Eleme" loading>{{title}}</el-button>-->
      <div class="LineChart" id="linechart">
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons')

export default {
  name: "right1",
  data(){
    return{
      title:"24小时温度检测",
      chart:null,
    }
  },
  mounted() {
    this.init_chart(this.chart);
  },
  methods:{
    init_chart(c){
    c = document.getElementById('linechart');
    const chart = echarts.init(c, 'dark');
    option = {
    xAxis: {
      type: 'category',
      data: ['1', '2', '2', '3', '4', '5', '6','7','8','9','10']
    },
    yAxis: {
      type: "{value} } °C"
    },
    series: [
        {
        data: [21, 22, 23, 24, 25, 26, 27,28,29,30],
        type: 'line',
        smooth: true
        }
      ]
    };
    chart.setOption(option);
    }
  }
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
.LineChart{
margin-top: 2%;
  height: 200px;
  width: auto;
}
</style>

<template>
  <div class="xpanel-wrapper xpanel-wrapper-60">
    <div class="xpanel xpanel-l-b">
      <div class="title">{{title}}</div>
      <div class="PieChart" id="piechart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

require('echarts/theme/macarons') // echarts theme


var option;
export default {
  name: "right2",
  data(){
    return{
      title:"标题4",
      chart:null
    }
  },
  mounted() {
    this.init_chart(this.chart);
  },
  methods:{
    init_chart(c) {
      c = document.getElementById('piechart');
      const chart = echarts.init(c, 'light')
      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {

          textStyle:{
            color:"#FFFFFF",
          },
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '监测数据',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#ffffff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 28.5, name: "温度" },
              { value: 72, name: '湿度' },
              { value: 350, name: 'PM2.5' },
              { value: 320, name: 'PM10' },
              { value: 300, name: '二氧化碳' },
              { value: 0, name: '一氧化碳' },
              { value: 70, name: '氨气' },
              { value: 0, name: '硫化氢' },

            ]
          }
        ]
      };
      chart.setOption(option);
    }
  }
}
</script>

<style scoped>
.PieChart {
  margin-top: 5%;

  height: 400px;
  width: auto;
}
</style>

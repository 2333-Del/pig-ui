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
import { getChartData, getNewData } from '@/api/pig/bigscreen'

require('echarts/theme/macarons') // echarts theme


var option;
export default {
  name: "right2",
  data(){
    return{
      title:"标题4",
      chart:null,
      temperature:null,
      ammonia:null,
      humidity:null,
      pm25:null,
      pm10:null,
      co2:null,
      co:null,
      sulfHydr:null
    }
  },
  mounted() {
    this.initChartData();
    this.init_chart(this.chart);
    let t2 = setInterval(this.init_chart,5000);
    console.log(this.temperature)

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
        grid:{
          top:"80%",
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
              { value: this.temperature, name: "温度" },
              { value: this.humidity, name: '湿度' },
              { value: this.pm25, name: 'PM2.5' },
              { value: this.pm10, name: 'PM10' },
              { value: this.co2, name: '二氧化碳' },
              { value: this.co, name: '一氧化碳' },
              { value: this.ammonia, name: '氨气' },
              { value: this.sulfHydr, name: '硫化氢' },

            ]
          }
        ]
      };
      chart.setOption(option);
    },
    //初始话数据
    initChartData(){
      getNewData().then(response => {
        this.temperature = response.data[0].temperature;
        this.ammonia = response.data[0].ammonia;
        this.humidity = response.data[0].humidity;
        this.pm25 = response.data[0].pm25;
        this.pm10 = response.data[0].pm10;
        this.co2 = response.data[0].co2;
        this.co = response.data[0].co;
        this.sulfHydr = response.data[0].sulfHydr;
        }
      );
    },
  }
}
</script>

<style scoped>
.PieChart {
  /* margin-top: 5%; */

  height: 400px;
  width: auto;
}
</style>

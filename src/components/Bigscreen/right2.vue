<template>
  <div class="xpanel-wrapper xpanel-wrapper-60">
    <div class="xpanel xpanel-l-b">
      <div class="title">{{ title }}</div>
      <div id="piechart" class="PieChart"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import {getNewData} from '@/api/pig/bigscreen'

require('echarts/theme/macarons') // echarts theme


var option;
export default {
  name: "right2",
  data() {
    return {
      title: "设备最新数据",
      chart: null,
      temperature: null,
      ammonia: null,
      humidity: null,
      pm25: null,
      pm10: null,
      co2: null,
      co: null,
      sulfHydr: null,
      t1: null,
    }
  },
  mounted() {

    this.init_chart(this.chart);
    this.t1 = setInterval(this.init_chart, 5000);

  },
  methods: {
    init_chart(c) {
      this.initChartData();
      c = document.getElementById('piechart');
      const chart = echarts.init(c, 'light')
      option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          show: false,
          textStyle: {
            color: "#FFFFFF",
          },
          top: '1%',
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
              borderWidth: 2,
            },
            top: "10%",
            // label: {
            //   show: true,
            //
            // },
            // emphasis: {
            //   label: {
            //     show: true,
            //     fontSize: '40',
            //     fontWeight: 'bold'
            //   }
            // },
            // labelLine: {
            //   show: true
            // },
            label: {
              show: true,
              // formatter: '{a}\n \n  {b}：  {d}',
              // formatter: '{a|{b}：{d}%}\n{hr|}',
              formatter: '{b}',
              color: '#fff',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold',
                color: '#fff',
              },
            },
            labelLine: {
              show: true,
              length: 5,
              length2: 5,
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: '#FFF'
              }
            },
            data: [
              {value: 0, name: "温度:\n" + this.temperature + "℃"},
              {value: 0, name: '湿度:\n' + this.humidity + "%"},
              {value: 0, name: 'PM2.5:\n' + this.pm25 + "mg/m³"},
              {value: 0, name: 'PM10:\n' + this.pm10 + "mg/m³"},
              {value: 0, name: '二氧化碳:\n' + this.co2 + "ppm"},
              {value: 0, name: '一氧化碳:\n' + this.co + "ppm"},
              {value: 0, name: '氨气:\n' + this.ammonia + "ppm"},
              {value: 0, name: '硫化氢:\n' + this.sulfHydr + "ppm"},

            ]
          }
        ]
      };
      chart.setOption(option);
    },
    //初始话数据
    initChartData() {
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
  },
  beforeDestroy() {
    clearInterval(this.t1);
  },
}
</script>

<style scoped>
.PieChart {
  /* margin-top: 5%; */
  height: 400px;
  width: auto;
}
</style>

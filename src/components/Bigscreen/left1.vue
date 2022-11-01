<template>

  <div class="xpanel-wrapper xpanel-wrapper-40">
    <div class="xpanel xpanel-l-t">
      <div class="title">{{ title }}</div>
      <p class="p1">
        <!--        <el-button type="primary" :loading-icon="Eleme" loading>实时监测中</el-button>-->
        <!--        <el-tag type="">设备名称：环境检测仪Z1</el-tag>-->
        <!--        <el-tag>设备编号：AMT22041216320011</el-tag>-->
      </p>
      <div id="CO2_Chart" class="CO2_Chart"></div>

    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { getChartCo2Data } from '@/api/pig/bigscreen'

export default {
  name: "left1",
  data() {
    return {
      title: "24小时二氧化碳监测",
      items: [
        {tag_name: "温度", tag_value: "28.5", tag_mark: "℃"},
        {tag_name: "湿度", tag_value: "72", tag_mark: "%"},
        {tag_name: "PM2.5", tag_value: "42", tag_mark: "mg/m³"},
        {tag_name: "PM10", tag_value: "66", tag_mark: "mg/m³"},
        {tag_name: "二氧化碳", tag_value: "2891", tag_mark: "ppm"},
        {tag_name: "一氧化碳", tag_value: "0", tag_mark: "ppm"},
        {tag_name: "氨气", tag_value: "62", tag_mark: "ppm"},
        {tag_name: "硫化氢", tag_value: "0", tag_mark: "ppm"},
      ],
      chart: null,
      t1: null,
      co2: [],
      time: [],
    }
  },
  mounted() {
    this.initChartData();
    this.init_chart(this.chart);
    this.t1 = setInterval(this.init_chart, 5000);
  },
  methods: {
    initChartData() {
      getChartCo2Data().then(response => {
          var tem = [];
          tem = response.data.co2;
          for (var i = 0; i < tem.length; i++) {
            this.co2.push(tem[i].value)
            this.time.push(tem[i].time)
          }
        }
      );
    },
    init_chart() {
      var chartDom = document.getElementById('CO2_Chart');
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        title: {
          text: '', //title here
          color: "#FFFFFF"
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#FFFFFF' //no change here
            }
          }
        },
        legend: {
          data: ['CO2']
        },
        toolbox: {
          feature: {}
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',//
            boundaryGap: false,
            data: this.time,
            axisLine: {
              lineStyle: {
                color: 'rgb(255,255,255)'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: 'rgb(255,255,255)'
              }
            }
          },
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: this.co2
          }
        ]
      };
      option && myChart.setOption(option);
    }
  },
  beforeDestroy() {
    clearInterval(this.t1);
  },
}
</script>

<style scoped>

.p1 {
  margin: 5px;
}

.tag-group {
  column-count: 2;
  margin-top: 30px;
}

.p2-l {
  margin-top: 0px;
  margin-left: 20px;
  font-size: large;
}

#p2_l_tag_name {
  font-size: large;

}

.p2-r {
  margin-top: 3px;
  margin-left: 5px;
  font-size: large;
}

.CO2_Chart {
  height: 70%;
  width: auto;
}
</style>

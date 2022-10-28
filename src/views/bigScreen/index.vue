<template>
  <div>
    <div class="header">
      <h1 class="header-title">{{ header_title_text }}</h1>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="col col-l">
          <left1/>
          <left2/>
        </div>
        <div class="col col-c">
          <mid1/>
          <mid2/>
        </div>
        <div class="col col-r">
          <right1/>
          <right2/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../../../public/static/css/app.css'
import left1 from '@/components/Bigscreen/left1'
import left2 from '@/components/Bigscreen/left2'
import mid1 from '@/components/Bigscreen/mid1'
import mid2 from '@/components/Bigscreen/mid2'
import Right1 from '@/components/Bigscreen/right1'
import Right2 from '@/components/Bigscreen/right2'
import {getNewData,getEquipment,getChartData } from  "@/api/pig/bigscreen"
import md5 from 'blueimp-md5'
import axios from 'axios'

export default {
  name: 'index',
  data() {
    return {
      header_title_text: '可视化大屏数据',
      temperature:null,
      humidity:null,
    }
  },
  methods: {
    initChartData(){
      getChartData().then(response => {
          this.humidity = response.data.humidity;
          this.temperature = response.data.temperature;
        }
      );
    },
    getdata(){
      var time = new Date().getTime() + '';  //时间戳
    // time = Hex.encode(DigestUtils.md5(timestamp+ a5b4 +key))
    var sign = time + 'deviceNoAMT19032315470001' + 'qqzS77nREDO9hQEQCSiyOYbiDL11TVyM';
    sign = md5(sign)
    
   return axios({
  
      method: 'get',
      url: 'http://admin.sensor-monitor.cn/v1/getDeviceData',
      data: {
        deviceNo: 'AMT19032315470001',
        timestamp: time,
        sign: sign,
     }
  });
    }
  },
  components: {
    Right2,
    Right1,
    left1,
    left2,
    mid1,
    mid2
  },
  created(){
    //vue实例被加载出来 后执行
    this.initChartData();
    this.getdata();
  }
}


</script>

<style scoped>

</style>

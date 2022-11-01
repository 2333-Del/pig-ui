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
          <!--          <mid2/>-->
          <mid3/>
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
import mid3 from '@/components/Bigscreen/mid3'
import {getChartData} from "@/api/pig/bigscreen"

export default {
  name: 'index',
  data() {
    return {
      header_title_text: '可视化大屏数据',
      temperature: null,
      humidity: null,
    }
  },
  methods: {
    initChartData() {
      getChartData().then(response => {
          this.humidity = response.data.humidity;
          this.temperature = response.data.temperature;
        }
      );
    },
  },
  components: {
    Right2,
    Right1,
    left1,
    left2,
    mid1,
    mid2,
    mid3
  },
  created() {
    //vue实例被加载出来 后执行
    this.initChartData();

  }
}


</script>

<style scoped>

</style>

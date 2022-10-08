<template>
  <div>
  <div class="header">
    <h1 class="header-title">大屏数据可视化模板</h1>
  </div>
  <div class="wrapper">
    <div class="content">
      <div class="col col-l">
<!--       left1-->
        <left1></left1>
<!--        left2-->
        <left2></left2>
      </div>
      <div class="col col-c">
       <mid1></mid1>
        <mid2></mid2>
      </div>
      <div class="col col-r">
       <right1></right1>

       <right2></right2>
       <right3></right3>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import "../../../public/static/css/app.css";
import  left1 from "../../components/Bigscreen/left1";
import  left2 from "../../components/Bigscreen/left2";
import  mid1 from "../../components/Bigscreen/mid1";
import  mid2 from "../../components/Bigscreen/mid2";
import Right1 from "@/components/Bigscreen/right1";
import Right2 from "@/components/Bigscreen/right2";
import Right3 from "@/components/Bigscreen/right3";

export default {
  name: "index",
  data: {

  },
  methods: {

  },
  components: {
    Right3,
    Right2,
    Right1,
    left1,
    left2,
    mid1,
    mid2,
  }
}


</script>

<style scoped>

</style>

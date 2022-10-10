<template>

  <div class="xpanel-wrapper xpanel-wrapper-40">
    <div class="xpanel xpanel-l-t">
      <div class="title">{{title}}</div>
      <p class="p1">
<!--        <el-button type="primary" :loading-icon="Eleme" loading>实时监测中</el-button>-->
        <el-tag type="">设备名称：环境检测仪Z1</el-tag>
        <el-tag>设备编号：AMT22041216320011</el-tag>
      </p>

      <div class="tag-group">
        <p class="p2-l" style="flex-wrap: initial" v-for="item in items">
          <el-tag id="p2_l_tag_name" type="dark" >{{item.tag_name}}</el-tag>
          <el-tag class="p2-r" >{{item.tag_value}}{{item.tag_mark}}</el-tag>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "left1",
  data(){
    return{
      title:"设备指标",
      items:[
        {tag_name:"温度",tag_value:"28.5",tag_mark:"℃"},
        {tag_name:"湿度",tag_value:"72",tag_mark:"%"},
        {tag_name:"PM2.5",tag_value:"42",tag_mark:"mg/m³"},
        {tag_name:"PM10",tag_value:"66",tag_mark:"mg/m³"},
        {tag_name:"二氧化碳",tag_value:"2891",tag_mark:"ppm"},
        {tag_name:"一氧化碳",tag_value:"0",tag_mark:"ppm"},
        {tag_name:"氨气",tag_value:"62",tag_mark:"ppm"},
        {tag_name:"硫化氢",tag_value:"0",tag_mark:"ppm"},
      ]
    }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style scoped>

.p1 {
  margin: 5px;
}
.tag-group{
  column-count: 2;
  margin-top: 30px;
}

.p2-l {
  margin-top: 0px;
  margin-left: 20px;
  font-size: large;
}
#p2_l_tag_name{
  font-size: large;

}
.p2-r {
  margin-top: 3px;
  margin-left: 5px;
  font-size: large;
}
</style>

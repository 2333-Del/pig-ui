<template>
  <div class="xpanel-wrapper xpanel-wrapper-75">
    <div class="xpanel no-bg"id="main">
      <el-container>
        <el-main >
          <video id="video"></video>
          <el-tag class="tag_info" type="info">信息</el-tag>
          <el-row class="rowrow">
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">名称：
                <span>{{ground_name}}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">连接时间：
              <span>{{connected_datetime}}</span>
              </div>
            </el-col>
          </el-row>
          <el-row class="rowrow">
            <el-col :span="12"><div class="grid-content bg-purple-dark">
              设备归属：
              <span>{{belonging}}</span>
            </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-dark">
              连接状态：
              <span>{{is_connected}}</span>
            </div>
            </el-col>
          </el-row>
          <el-row class="rowrow">
            <el-col :span="12"><div class="grid-content bg-purple-dark">
              联系人：
              <span>{{belonging}}</span>
            </div>
            </el-col>
            <el-col :span="12"><div class="grid-content bg-purple-dark">
              联系电话：
              <span>{{belonging_phone}}</span>
            </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>



    </div>
  </div>
</template>

<script>

export default {
  name: 'mid1',
  data() {
    return {
      ground_name:"猪场",
      connected_datetime:"2022年10月9日星期日 下午7:00",
      belonging:"浙江农林大学",
      is_connected:"true",
      belonging_phone:"18800008888"
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style scoped>

#main{
  color:  #ecf5ff;
  width: 100%;
  height: 100%;
  /*border: 1px solid;*/
  margin-top: 20px;
}
#video{
  padding: 5px;
  border: 1px solid;
  width: 100%;
}
.tag_info{
  margin: 5px;
}
.rowrow{
  margin-top: 10px;
  font-size: large;
  border-bottom: 1px solid #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple-dark {
  background: rgba(255, 255, 255, 0.01);
}
</style>

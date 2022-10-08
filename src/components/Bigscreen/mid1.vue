<template>
  <div class="xpanel-wrapper xpanel-wrapper-75">
    <div class="xpanel no-bg"id="main">
      <el-container>
        <el-main >
          <video id="video"></video>
          <div>
            <p> <el-button type="primary">文本内容文本内容</el-button><el-button type="primary">文本内容文本内容</el-button><el-button type="primary">文本内容文本内容</el-button></p>
            <p> <el-button type="primary">文本内容文本内容</el-button></p>

          </div>
        </el-main>
      </el-container>



    </div>
  </div>
</template>

<script>

export default {
  name: 'mid1',
  data() {
    return {}
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
  border: 1px solid;
  margin-top: 20px;
}
#video{
  padding: 5px;
  border: 1px solid;
  width: 100%;
}
</style>

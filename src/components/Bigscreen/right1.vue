<template>

  <div class="xpanel-wrapper xpanel-wrapper-40">
    <div class="xpanel xpanel-l-t">
      <div class="title">{{title}}</div>
      <p><el-button type="primary" :loading-icon="Eleme" loading>实时监测中</el-button></p>

    </div>
  </div>
</template>

<script>
export default {
  name: "right1",
  data(){
    return{
      title:"标题3",
    }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style scoped>
p {
  margin: 20px;
}
</style>

<template>
  <div class="xpanel-wrapper xpanel-wrapper-25">
    <div class="xpanel xpanel-c-b">

      <div class="title title-long">
        {{ title }}
      </div>
      <p id="current_datetime">{{ current_datetime }}</p>
    </div>
  </div>
</template>

<script>

import dayjs from 'dayjs'

export default {
  name: "mid2",
  data() {
    return {
      title: "当前时间",
      current_datetime: dayjs().format("YYYY年MM月DD日 HH时mm分ss秒")
    }
  },
  methods: {
    update_datetime() {
      this.current_datetime = dayjs().format("YYYY年MM月DD日 HH时mm分ss秒");
    }
  },
  mounted() {
    this.timeId = setInterval(this.update_datetime, 1000);
    // initCharts()
  },
}
</script>

<style scoped>
#current_datetime {
  font-size: x-large;
  text-align: center;
  padding-left: 20px;
  color: #ecf5ff;
}
</style>

<template xmlns="http://www.w3.org/1999/html">
  <div class="xpanel-wrapper xpanel-wrapper-75">
    <div class="xpanel no-bg" id="main">
      <el-container>
        <el-main>
          <!--          <video href="http://8.130.165.240:8083/static/123.mp4" id="video">-->

          <!--          </video>-->
          <div class="video">
            <jsmpeg_player :url="url"/>
          </div>
          <el-tag class="tag_info" type="info">信息</el-tag>
          <el-row class="rowrow">
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <i class="el-icon-info"></i>
                <span>名称：</span>
                <span>{{ ground_name }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <i class="el-icon-date"></i>
                <span>连接时间：</span>
                <span>{{ connected_datetime }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row class="rowrow">
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <i class="el-icon-guide"></i>
                <span>设备归属：</span>
                <span>{{ belonging }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <i class="el-icon-connection"></i>
                <span>连接状态：</span>
                <span>{{ is_connected }}</span>
              </div>
            </el-col>
          </el-row>
          <el-row class="rowrow">
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <i class="el-icon-user"></i>
                <span>联系人：</span>
                <span>{{ belonging }}</span>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-dark">
                <i class="el-icon-phone-outline"></i>
                <span>联系电话：</span>
                <span>{{ belonging_phone }}</span>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>


    </div>
  </div>
</template>

<script>
import jsmpeg_player from '../jsmpeg-player/jsmpeg-player'

const demoUrl = 'ws://localhost:8866/live'

class Timer {
  _startTime = null
  time = 0

  start() {
    this._startTime = Date.now()
    this.timer = setInterval(() => {
      this.time = Date.now() - this._startTime
    }, 5)
  }

  stop() {
    this._startTime = null
    this.time = 0
    clearInterval(this.timer)
  }
}

function formatDuring(mss) {
  const milliseconds = mss,
    minutes = parseInt(milliseconds / 1000),
    seconds = parseInt(minutes / 60),
    hours = parseInt(seconds / 60)

  return `${seconds}:${minutes}:${milliseconds % 1000}`
  return (
    (days ? days + ':' : '') +
    (hours ? hours + ':' : '') +
    (minutes ? minutes + ':' : '') +
    seconds
  )
}

export default {

  name: 'mid1',
  data() {
    return {
      ground_name: '猪场',
      connected_datetime: '2022年10月9日星期日 下午7:00',
      belonging: '浙江农林大学',
      is_connected: 'true',
      belonging_phone: '18800008888',
      url: demoUrl,
      tempUrl: demoUrl,
      timer: new Timer()
    }
  },
  components: {
    jsmpeg_player
  },
  computed: {
    currTime() {
      return formatDuring(this.timer.time)
    },
    demoUrl() {
      return demoUrl
    }
  },
  mounted() {
    this.timer.start()
  },
  beforeDestroy() {
    this.timer.stop()
  },
  methods: {
    vedio() {
      this.$router.push('/vedio')
    }
  }
}
</script>

<style scoped>

#main {
  color: #ecf5ff;
  width: 100%;
  height: 100%;
  /*border: 1px solid;*/
  margin-top: 20px;
}

.video {
  padding: 5px;
  /*border: 1px solid;*/
  width: 100%;
  height: 400px;
}

.tag_info {
  margin: 5px;
}

.rowrow {
  margin-top: 10px;
  font-size:medium;
  /*border-bottom: 1px solid #ffffff;*/
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purple-dark {
  /*background: rgba(255, 255, 255, 0.01);*/
}

</style>

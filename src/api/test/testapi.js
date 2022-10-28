import axios from 'axios'


// 查询生成表数据
export function getdata(query) {
    var time = new Date().getTime() + '';  //时间戳
    // time = Hex.encode(DigestUtils.md5(timestamp+ a5b4 +key))
    var sign = time + 'deviceNoAMT19032315470001' + 'qqzS77nREDO9hQEQCSiyOYbiDL11TVyM';
    sign = md5(sign)

  return axios({
    method: 'get',
    url: 'http://admin.sensor-monitor.cn/v1/getDeviceData',
    data: {
      deviceNo: 'AMT22041216320011',
      timestamp: time,
      sign: sign,
    }
  });
}

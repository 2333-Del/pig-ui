import request from '@/utils/request'


// 查询最新数据详情
export function getNewData() {
  return request({
    url: '/pig/bigScreen/newData',
    method: 'get'
  })
}

// 查询图表温度湿度信息
export function getChartData() {
  return request({
    url: '/pig/bigScreen/chartData',
    method: 'get'
  })
}

// 获取设备信息
export function getEquipment() {
  return request({
    url: '/pig/bigScreen/getEquipment',
    method: 'get'
  })
}



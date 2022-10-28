import $ from '../../../../../node_modules/jquery/src/jquery'

export function Now() {
  return window.performance
    ? window.performance.now() / 1000
    : Date.now() / 1000
}

export function Fill(array, value) {
  if (array.fill) {
    array.fill(value)
  } else {
    for (let i = 0; i < array.length; i++) {
      array[i] = value
    }
  }
}

export function Base64ToArrayBuffer(base64) {
  let binary = window.atob(base64)
  let length = binary.length
  let bytes = new Uint8Array(length)
  for (let i = 0; i < length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes.buffer
}

/**
 *
 * @param {object} param
 * @param {string|object|Array} param.data 数据，传入后url参数将被忽略
 * @param {string} param.url 文件下载地址
 * @param {string} param.name 文件名称
 * @param {string} param.mimeType 文件mime类型
 * @returns
 */
export function saveToLocal(
  blob,
  name = 'JSMpeg_' + Date.now(),
  mimeType = ''
) {
  if (!blob) return
  
  const a = document.createElement('a')
  a.style.display = 'none'
  a.download = name
  if (typeof blob === 'string') {
    a.href = blob
  } else {
	// console.log(blob instanceof Array) //blob为array类型
    blob =
      blob instanceof Blob
        ? blob
        : new Blob(blob instanceof Array ? blob : [blob], {
            type: mimeType
          })
    a.href = URL.createObjectURL(blob)
	console.log(blob)
	
	var x=a.href //string类型
	x=x.substr(5)
	var paramName='8081'
	var replaceWith='8080/download'
	x = x.replace(paramName,replaceWith)
	console.log(x)
	
	//将blob数据封装成formdata，提交给java后端
	let formData = new FormData();
	formData.append('file', blob);
	$.ajax({
		url:x,
		type:"POST",
		dataType:'json',
		data:formData,
		// responseType: 'blob',
		// dataType: "json",
		// data:{
		// 	"blob":blob
		// },
		contentType: false,
		processData: false,
		success:function (data) {
			console.log(data)
		}
	})
	
  }

  setTimeout(() => {
    a.click()
  }, 0)
  setTimeout(() => {
    a.remove()
  }, 1)

  if (blob instanceof Blob) {
    setTimeout(() => {
      URL.revokeObjectURL(blob)
    }, 1000)
  }
  
}
// 对象深拷贝
export function jsonDeepClone(obj) {
  if (obj && obj instanceof Object) {
    return JSON.parse(JSON.stringify(obj))
  } else {
    return obj
  }
}
// 数量超过一定 显示规范
export const showNum = num => {
  // if (typeof num !== 'number') return ''
  if (!num) return 0
  num = parseInt(num)
  if (num < 1000) return num
  if (num < 10000 && num >= 1000) return (num / 1000).toFixed(1) + 'k'
  if (num < 100000) return (num / 10000).toFixed(2) + 'w'
  return '10w+'
}
export const uuid = () => {
  let s = []
  let hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  return s.join('')
}
// 时间补零
function addZero(num) {
  if (parseInt(num) < 10) {
    num = '0' + num
  }
  return num
}
// 时间格式化
export const dataFormat = time => {
  if (!time) return ''
  let date = new Date(time * 1000)
  time =
    date.getFullYear() +
    '-' +
    addZero(date.getMonth() + 1) +
    '-' +
    addZero(date.getDate()) +
    ' ' +
    addZero(date.getHours()) +
    ':' +
    addZero(date.getMinutes()) +
    ':' +
    addZero(date.getSeconds())
  return time
}
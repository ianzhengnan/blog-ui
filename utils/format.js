
const Format = function () {
  return {

    formatTime(timespan){
      let dateTime = new Date(timespan)
      let timestampe = dateTime.getTime()

      let year = dateTime.getFullYear()
      let month = dateTime.getMonth()
      let day = dateTime.getDate()
      let hour = dateTime.getHours()
      let minute = dateTime.getMinutes()
      let second = dateTime.getSeconds()
      let now = new Date()
      let now_new = now.getTime()

      let millisecodes = 0
      let timeSpanStr = ''

      millisecodes = now_new - timestampe

      if (millisecodes <= 1000 * 60 * 1) {
        timeSpanStr = '刚刚'
      }else if (1000 * 60 * 1 < millisecodes && millisecodes <= 1000 * 60 * 60) {
        timeSpanStr = Math.round(millisecodes / (1000 * 60)) + '分钟前'
      }else if (1000 * 60 * 60 * 1 < millisecodes && millisecodes <= 1000 * 60 * 60 * 24) {
        timeSpanStr = Math.round(millisecodes / (1000 * 60 * 60)) + '小时前'
      }else if (1000 * 60 * 60 * 24 < millisecodes && millisecodes <= 1000 * 60 * 60 * 24 * 15) {
        timeSpanStr = Math.round(millisecodes / (1000 * 60 * 60 * 24)) + '天前'
      }else if (millisecodes > 1000 * 60 * 60 * 24 * 15 && year === now.getFullYear()) {
        timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute
      }else {
        timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute
      }

      return timeSpanStr
    },

    formatDate(timespan){
      let dateTime = new Date(timespan)
      return dateTime.getUTCFullYear() + '年' + dateTime.getMonth() + '月' + dateTime.getDate() + '日'
    }

  }
}



export default Format
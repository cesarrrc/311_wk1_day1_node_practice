// import moment here; use this package in each function
var moment = require('moment'); // require
moment().format();

const today = () => {
  // write code for dates.today
  return moment().format('dddd')
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format('ll')
}

const currentTime = () => {
  // write code for dates.currentTime
  return moment().format('hh:mm:ss A')
}

console.log(currentTime())

module.exports = {
  today,
  calendar,
  currentTime
}
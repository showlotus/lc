/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  let year = date.match(/^\d{4}(?=-)/)[0]
  let currentYearFirstDay = `${year}-01-01`
  let seconds = new Date(date).getTime() - new Date(currentYearFirstDay).getTime()
  return seconds / 1000 / 60 / 60 / 24 + 1
};
// @lc code=end

var date = "2019-01-09"
date = "2019-02-10"
date = "2004-03-01"
date = "2021-12-21"
date = "2003-03-01"
console.log(dayOfYear(date))

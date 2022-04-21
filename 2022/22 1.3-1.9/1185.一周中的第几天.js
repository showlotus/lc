/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
const WeekList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfTheWeek = function (day, month, year) {
  let weekDay = new Date(year, month - 1, day).getDay();
  return WeekList[weekDay];
};
// @lc code=end
var day = 31,
  month = 8,
  year = 2019;

// ;(day = 3), (month = 1), (year = 2022)

console.log(dayOfTheWeek(day, month, year));

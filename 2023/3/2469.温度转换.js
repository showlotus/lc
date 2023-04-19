/*
 * @lc app=leetcode.cn id=2469 lang=javascript
 *
 * [2469] 温度转换
 */

// @lc code=start
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32]
}
// @lc code=end

let celsius = 36.5
celsius = 122.11

const res = convertTemperature(celsius)
console.log(res)

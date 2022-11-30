/*
 * @lc app=leetcode.cn id=1773 lang=javascript
 *
 * [1773] 统计匹配检索规则的物品数量
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const ops = {
    type: 0,
    color: 1,
    name: 2
  }
  return items.reduce(
    (res, item) => res + (item[ops[ruleKey]] === ruleValue ? 1 : 0),
    0
  )
}
// @lc code=end
let items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
  ],
  ruleKey = "color",
  ruleValue = "silver"

;(items = [
  ["phone", "blue", "pixel"],
  ["computer", "silver", "phone"],
  ["phone", "gold", "iphone"]
]),
  (ruleKey = "type"),
  (ruleValue = "phone")

let res = countMatches(items, ruleKey, ruleValue)
console.log(res)

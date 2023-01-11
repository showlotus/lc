/*
 * @lc app=leetcode.cn id=1807 lang=javascript
 *
 * [1807] 替换字符串中的括号内容
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  const map = new Map(knowledge)
  let res = ""
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      let j = i + 1
      let tmp = ""
      while (s[j] !== ")") {
        tmp += s[j++]
      }
      if (map.has(tmp)) {
        res += map.get(tmp)
      } else {
        res += "?"
      }
      i = j
    } else {
      res += s[i]
    }
  }
  return res
}
// @lc code=end
let s = "(name)is(age)yearsold"
let knowledge = [
  ["name", "bob"],
  ["age", "two"]
]

;(s = "hi(name)"), (knowledge = [["a", "b"]])
;(s = "(a)(a)(a)aaa"), (knowledge = [["a", "yes"]])
;(s = "a (a)"), (knowledge = [["a", "yes"]])

const res = evaluate(s, knowledge)
console.log(res)

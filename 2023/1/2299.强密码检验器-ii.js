/*
 * @lc app=leetcode.cn id=2299 lang=javascript
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
  const rules = [
    { validator: value => value.length >= 8, message: "至少要有 8 个字符" },
    {
      validator: value => /(?=.*[a-z])/.test(value),
      message: "至少包含一个小写英文字母"
    },
    {
      validator: value => /(?=.*[A-Z])/.test(value),
      message: "至少包含一个大写英文字母"
    },
    {
      validator: value => /(?=.*[0-9])/.test(value),
      message: "至少包含一个数字"
    },
    {
      validator: value => /(?=.*[!@#$%^&*()\-+])/.test(value),
      message: `至少包含一个特殊字符。特殊字符为："!@#$%^&*()-+" 中的一个`
    },
    {
      validator: value => /^(?!.*(.)\1)/.test(value),
      message: `不能包含 2 个连续相同的字符`
    }
  ]
  for (const rule of rules) {
    if (!rule.validator(password)) {
      return false
    }
  }
  return true
}
// @lc code=end

let password = "IloveLe3tcode!"
password = "Me+You--IsMyDream1"
password = "-isnyMream1"

const res = strongPasswordCheckerII(password)
console.log(res)
console.log(/^(?!.*(.)\1)/.test(password))

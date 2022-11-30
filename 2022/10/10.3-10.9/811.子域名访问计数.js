/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = {}
  cpdomains.forEach(cpdomain => {
    const domains = getDomains2(cpdomain)
    for (let i = 1; i < domains.length; i++) {
      const domain = domains[i]
      if (!map[domain]) {
        map[domain] = domains[0]
      } else {
        map[domain] += domains[0]
      }
    }
  })
  return Object.keys(map).map(key => `${map[key]} ${key}`)
}

function getDomains(str) {
  const matched = str.match(/(\d+)\s(\w+\.(\w+\.(\w+))|\w+\.(\w+))$/)
  const keys = matched.slice(1).filter(_ => _)
  keys[0] = Number(keys[0])
  return keys
}

function getDomains2(str) {
  const keys = []
  for (let i = str.length - 1; i >= 0; i--) {
    if (/\d/.test(str[i])) {
      keys.unshift(Number(str.slice(0, i + 1)))
      break
    }
    while (/\w/.test(str[i])) {
      i--
    }
    keys.push(str.slice(i + 1))
  }
  return keys
}

/**
 * google.mail.com
 * mail.com
 * com
 */
// @lc code=end
console.clear()

let cpdomains = ["9001 discuss.leetcode.com"]
// cpdomains = [
//   "900 google.mail.com",
//   "50 yahoo.com",
//   "1 intel.mail.com",
//   "5 wiki.org"
// ]
// cpdomains = ["900 mail.com"]
let res = subdomainVisits(cpdomains)
console.log(res)
// console.log(getDomains2("900 google.mail.com"))
// console.log(getDomains("900 test.org"))

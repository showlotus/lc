/*
 * @lc app=leetcode.cn id=745 lang=javascript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  this.dictionary = new Map()
  for (let k = 0, len = words.length; k < len; ++k) {
    const w = words[k]
    const n = w.length
    for (let i = 1; i <= n; ++i) {
      for (let j = 1; j <= n; ++j) {
        this.dictionary.set(`${w.substring(0, i)}#${w.substring(n - j)}`, k)
      }
    }
  }
}

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  const dic = `${pref}#${suff}`
  if (this.dictionary.has(dic)) {
    return this.dictionary.get(dic)
  }
  return -1
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end
var wf = new WordFilter(["apple", "ape"])
var res = wf.f("ap", "e")
console.log(wf.dictionary)
console.log(res)

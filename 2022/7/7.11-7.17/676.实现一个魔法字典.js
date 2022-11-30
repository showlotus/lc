/*
 * @lc app=leetcode.cn id=676 lang=javascript
 *
 * [676] 实现一个魔法字典
 */

// @lc code=start

var MagicDictionary = function () {}

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  this.map = new Map(dictionary.map((v, i) => [v, i]))
}

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  for (const v of this.map.keys()) {
    if (v.length === searchWord.length) {
      let diff = 0
      for (let i = 0, len = v.length; i < len; ++i) {
        if (v[i] !== searchWord[i]) {
          diff++
        }
      }
      if (diff === 1) return true
    }
  }
  return false
}

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end

var m = new MagicDictionary()
m.buildDict(["hello", "leetcode"])
console.log(m.search("hello"))
console.log(m.search("hallo"))

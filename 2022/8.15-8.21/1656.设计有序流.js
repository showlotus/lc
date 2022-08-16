/*
 * @lc app=leetcode.cn id=1656 lang=javascript
 *
 * [1656] 设计有序流
 */

// @lc code=start
/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.data = new Array(n + 1)
  this.p = 1
  this.size = n + 1
}

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.data[idKey] = value
  if (this.p !== idKey) {
    return []
  }

  let start = this.p
  let end = start
  while (end < this.size && this.data[end] != undefined) {
    end++
  }
  this.p = end
  return this.data.slice(start, end)
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end
var os = new OrderedStream(5)
console.log(os.insert(3, "ccccc"))
console.log(os.insert(1, "aaaaa"))
console.log(os.insert(2, "bbbbb"))
console.log(os.insert(5, "eeeee"))
console.log(os.insert(4, "ddddd"))

/*
 * @lc app=leetcode.cn id=768 lang=javascript
 *
 * [768] 最多能完成排序的块 II
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const stack = []
  for (const s of arr) {
    if (stack.length === 0 || stack[stack.length - 1] <= s) {
      stack.push(s)
    } else {
      const max = stack.pop()
      while (stack.length && stack[stack.length - 1] > s) {
        stack.pop()
      }
      stack.push(max)
    }
  }
  return stack.length
}
// @lc code=end
var arr = [5, 4, 3, 2, 1]
arr = [2, 1, 3, 4, 4]
arr = [2]
arr = [0, 0, 1, 1, 1]

var res = maxChunksToSorted(arr)

console.log(res)

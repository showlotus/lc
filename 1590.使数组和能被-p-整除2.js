/*
 * @lc app=leetcode.cn id=1590 lang=javascript
 *
 * [1590] 使数组和能被 P 整除
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  // DONE 取余定理：(y - z) % p = x 等价于 z % p == (y - x) % p
  const n = nums.length
  let x = 0
  for (const num of nums) {
    x = (x + num) % p
  }
  if (x === 0) {
    return 0
  }
  const map = new Map()
  let res = n
  let y = 0
  for (let i = 0; i < n; i++) {
    map.set(y, i)
    y = (y + nums[i]) % p
    if (map.has((y - x + p) % p)) {
      res = Math.min(res, i - map.get((y - x + p) % p) + 1)
    }
  }
  return res === n ? -1 : res
}
// @lc code=end

let nums = [3, 1, 4, 2]
let p = 6

// nums = [6, 3, 5, 2]
// p = 9

nums = [1, 2, 3]
p = 3

nums = [1, 2, 3]
p = 7

const res = minSubarray(nums, p)
console.log(res)

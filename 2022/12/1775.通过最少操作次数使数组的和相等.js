/*
 * @lc app=leetcode.cn id=1775 lang=javascript
 *
 * [1775] 通过最少操作次数使数组的和相等
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function (nums1, nums2) {
  const m = nums1.length
  const n = nums2.length
  if (m * 6 < n || n * 6 < m) {
    return -1
  }

  const cnt1 = new Array(7).fill(0)
  const cnt2 = new Array(7).fill(0)
  let diff = 0
  for (const s of nums1) {
    ++cnt1[s]
    diff += s
  }

  for (const s of nums2) {
    ++cnt2[s]
    diff -= s
  }

  if (diff === 0) {
    return 0
  }

  if (diff > 0) {
    return help(cnt2, cnt1, diff)
  }
  return help(cnt1, cnt2, -diff)
}

const help = (h1, h2, diff) => {
  const h = new Array(7).fill(0)
  for (let i = 1; i < 7; i++) {
    h[6 - i] += h1[i]
    h[i - 1] += h2[i]
  }

  let res = 0
  for (let i = 5; i > 0 && diff > 0; i--) {
    let t = 1
    if (diff > i) {
      t = Math.min(Math.floor(diff / i), h[i])
    }
    // const t = Math.min(Math.floor((diff + i - 1) / i), h[i])
    res += t
    diff -= t * i
  }
  return res
}
// @lc code=end
let nums1 = [1, 2, 3, 4, 5, 6]
let nums2 = [1, 1, 2, 2, 2, 2]

const res = minOperations(nums1, nums2)
console.log(res)

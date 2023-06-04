/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const res = []
  const n = nums.length
  const visited = new Array(n).fill(false)
  dfs(nums, [], 0, n, visited, res)
  return res
}

const dfs = (nums, seqs, depth, len, visited, result) => {
  if (depth === len) {
    result.push(seqs)
    return
  }

  for (let i = 0; i < len; i++) {
    if (visited[i]) {
      continue
    }
    if (i > 0 && nums[i - 1] === nums[i] && !visited[i - 1]) {
      console.log(i, nums[i], seqs)
      continue
    }
    visited[i] = true
    dfs(nums, [...seqs, nums[i]], depth + 1, len, visited, result)
    visited[i] = false
  }
}
// @lc code=end
let nums = [1, 1, 2]
nums = [1, 2, 3]
nums = [3, 3, 0, 3]

const res = permuteUnique(nums)
console.log(res)

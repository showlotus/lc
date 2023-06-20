/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function (nums) {
  const n = nums.length
  const dp = new Array(3).fill(0)
  for (let i = 0; i < n; i++) {
    const a = dp[0] + nums[i]
    const b = dp[1] + nums[i]
    const c = dp[2] + nums[i]
    dp[a % 3] = Math.max(dp[a % 3], a)
    dp[b % 3] = Math.max(dp[b % 3], b)
    dp[c % 3] = Math.max(dp[c % 3], c)
  }
  return dp[0]
}

let nums = [3, 6, 5, 1, 8]
nums = [1, 2, 3, 4, 4]

const res = maxSumDivThree(nums)
console.log(res)

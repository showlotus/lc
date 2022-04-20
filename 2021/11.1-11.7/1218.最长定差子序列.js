/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  /* 
    dp：以第i个元素开头的最长定差子序列的长度 = 与第i个元素相差difference的下一个元素j，开头的最长定差子序列的长度 + 1
    dp[i] = dp[j] + 1
    arr[j] - arr[i] = difference 
    i < j
  */
  // if (arr.length === 1) return 1
  let res = 1
  let dp = new Array(arr.length).fill(1)
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] === difference) {
        dp[i] = dp[j] + 1
        res = Math.max(dp[i], res)
        break
      }
    }
  }
  return res
};

let arr = [1, 2, 3, 4],
  difference = 1

arr = [1, 3, 5, 7]
difference = 1

arr = [1, 5, 7, 8, 5, 3, 4, 2, 1]
difference = -2

arr = [1]
difference = 0

console.log(longestSubsequence(arr, difference))

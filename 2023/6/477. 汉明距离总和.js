/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  const n = nums.length
  let res = 0
  // nums[i] 最大值为 10^9，最大长度为 30 位
  for (let i = 0; i <= 30; i++) {
    let c = 0
    for (let j = 0; j < n; j++) {
      c += (nums[j] >> i) & 1
    }
    res += c * (n - c)
  }

  return res
}

let nums = [4, 14, 2]

nums = [4, 14, 4]

const res = totalHammingDistance(nums)
console.log(res)

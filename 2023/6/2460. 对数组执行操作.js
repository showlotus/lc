/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  // 复杂度：O(N) O(N)
  // 模拟处理
  const n = nums.length
  const res = []
  for (let i = 0; i < n; i++) {
    if (i < n - 1 && nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
    // 记录不为 0 的数到结果数据中
    if (nums[i] !== 0) {
      res.push(nums[i])
    }
  }

  // 如果结果数组长度小于原数组长度，则补 0
  for (let i = res.length; i < n; i++) {
    res.push(0)
  }

  return res
}

let nums = [1, 2, 2, 1, 1, 0]

nums = [1, 0, 2, 0, 3, 0]
// nums = [0, 0]
nums = [0, 1]

// nums = [847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272]
// [1694,399,832,1758,412,206,272,0,0,0,0,0,0,0]

const res = applyOperations(nums)
console.log(res)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  // 双指针：O(N) O(1)
  // 模拟处理
  const n = nums.length
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2
      nums[i + 1] = 0
    }
  }

  // 利用双指针，将所有的 0 移到数据尾部
  for (let i = 0, j = 0; j < n; j++) {
    if (nums[j] !== 0) {
      if (i !== j) {
        nums[i] = nums[j]
        nums[j] = 0
      }
      i++
    }
  }

  return nums
}

let nums = [1, 2, 2, 1, 1, 0]

nums = [1, 0, 2, 0, 3, 0]
nums = [0, 0]
nums = [0, 1]

nums = [847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272]
// [1694,399,832,1758,412,206,272,0,0,0,0,0,0,0]

const res = applyOperations(nums)
console.log(res)

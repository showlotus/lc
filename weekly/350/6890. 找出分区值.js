/**
给你一个 正 整数数组 nums 。

将 nums 分成两个数组：nums1 和 nums2 ，并满足下述条件：

数组 nums 中的每个元素都属于数组 nums1 或数组 nums2 。
两个数组都 非空 。
分区值 最小 。
分区值的计算方法是 |max(nums1) - min(nums2)| 。

其中，max(nums1) 表示数组 nums1 中的最大元素，min(nums2) 表示数组 nums2 中的最小元素。

返回表示分区值的整数。

提示：

  2 <= nums.length <= 105
  1 <= nums[i] <= 109
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  // 求数组中两个值差绝对值的最小值
  nums.sort((a, b) => a - b)
  let res = Number.MAX_VALUE
  for (let i = 1; i < nums.length; i++) {
    res = Math.min(res, nums[i] - nums[i - 1])
  }
  return res
}

let nums = [1, 3, 2, 4]
nums = [100, 1, 10]
// nums = [1, 4, 7, 8]

// nums = [59, 51, 1, 98, 73]

const res = findValueOfPartition(nums)
console.log(res)

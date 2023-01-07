// 1. 相等返回
// 704.二分查找
// 给定一个 nn 个元素有序的（升序）整型数组 numsnums 和一个目标值 targettarget ，
// 写一个函数搜索 numsnums 中的 targettarget，如果目标值存在返回下标，否则返回 -1。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

/*
 * @lc app=leetcode.cn id=611 lang=javascript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function canMakeTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a
}

/* //! 1.0 枚举O(n^3)
var triangleNumber = function (nums) {
  if (nums.length < 3) return 0;
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        if (canMakeTriangle(nums[i], nums[j], nums[k])) ++count;
      }
    }
  }
  return count;
}; 
*/
//* 2.0 排序+二分
var triangleNumber = function (nums) {
  if (nums.length < 3) return 0;
  let count = 0;
  nums = nums.sort();
  for (let i = 0; i < nums.length; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        if (canMakeTriangle(nums[i], nums[j], nums[k])) ++count;
      }
    }
  }
  return count;
};
// @lc code=end
let test = [2, 2, 3, 4]
console.log(triangleNumber(test))

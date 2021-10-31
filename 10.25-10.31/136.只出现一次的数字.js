/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return nums.reduce((prev, curr) => {
    return prev ^ curr
  }, 0)
};

let nums = [2, 1, 2]

console.log(singleNumber(nums))

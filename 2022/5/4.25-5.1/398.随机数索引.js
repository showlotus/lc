/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  /* 水塘抽样 */
  let res = 0;
  let len = this.nums.length;
  for (let i = 0, cnt = 0; i < len; i++) {
    if (this.nums[i] === target) {
      cnt++;
      if (Math.floor(Math.random() * cnt) === 0) {
        res = i;
      }
    }
  }
  return res;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

let nums = [1, 2, 3, 3, 3, 3];
let solution = new Solution(nums);
console.log(solution.pick(3));
console.log(solution.pick(3));
console.log(solution.pick(2));

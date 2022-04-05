/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * 额外的知识点
 * x & -x
 * x % 2 == 1 => x & -x == 1
 * x & 2 == 0 => Max(2^m), x % 2^m == 0, m ∈ N
 */
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.tree = new Array(nums.length + 1).fill(0);
  this.nums = nums;
  nums.forEach((v, i) => {
    this.add(i + 1, v);
  });
};

NumArray.prototype.add = function (index, val) {
  while (index < this.tree.length) {
    this.tree[index] += val;
    // console.log(this.tree[index], index);
    index += index & -index;
  }
  // console.log(this.tree);
  // console.log("--");
};

NumArray.prototype.prefixSum = function (index) {
  let sum = 0;
  while (index > 0) {
    sum += this.tree[index];
    index -= index & -index;
  }
  return sum;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.add(index + 1, val - this.nums[index]);
  this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixSum(right + 1) - this.prefixSum(left);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

var ops = ["NumArray", "sumRange", "update", "sumRange"];
var data = [[[1, 3, 5, 6, 8, 9]], [0, 2], [1, 2], [0, 2]];
var numArray;
var res = [];
ops.forEach((operation, i) => {
  if (i === 0) {
    numArray = new NumArray(data[0][0]);
    res.push(null);
  } else {
    res.push(numArray[operation](...data[i]));
  }
});
console.log(numArray.tree);
console.log(res);

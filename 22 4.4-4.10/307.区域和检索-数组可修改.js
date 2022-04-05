/*
 * @lc app=leetcode.cn id=307 lang=javascript
 *
 * [307] 区域和检索 - 数组可修改
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.data = nums;
  const n = nums.length;
  this.size = Math.floor(Math.sqrt(n));
  this.sum = new Array(Math.ceil(n / this.size)).fill(0);
  nums.forEach((v, i) => {
    this.sum[Math.floor(i / this.size)] += v;
  });
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  // 更新分块和
  this.sum[Math.floor(index / this.size)] += val - this.data[index];
  this.data[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  let l = Math.floor(left / this.size);
  let li = left % this.size;
  let r = Math.floor(right / this.size);
  let ri = right % this.size;

  // 位于同一分块中
  if (l === r) {
    let sum = 0;
    while (li <= ri) {
      sum += this.data[l * this.size + li++];
    }
    return sum;
  }

  let leftSum = 0;
  for (let i = li; i < this.size; i++) {
    leftSum += this.data[l * this.size + i];
  }
  let midSum = 0;
  for (let i = l + 1; i < r; i++) {
    midSum += this.sum[i];
  }
  let rightSum = 0;
  for (let i = 0; i <= ri; i++) {
    rightSum += this.data[r * this.size + i];
  }
  return leftSum + midSum + rightSum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
// @lc code=end

var ops = ["NumArray", "sumRange", "update", "sumRange"];
var data = [[[1, 3, 5]], [0, 2], [1, 2], [0, 2]];
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
console.log(res);

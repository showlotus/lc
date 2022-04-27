/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start

var RandomizedSet = function () {
  this.data = [];
  this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map.has(val)) return false;
  this.map.set(val, this.data.length);
  this.data.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map.has(val)) return false;
  let last = this.data[this.data.length - 1];
  let removeIdx = this.map.get(val);
  this.data[removeIdx] = last;
  this.map.set(last, removeIdx);
  this.map.delete(val);
  this.data.pop();
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let len = this.map.size;
  return this.data[(Math.random() * len) | 0];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

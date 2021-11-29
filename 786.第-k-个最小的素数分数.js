/*
 * @lc app=leetcode.cn id=786 lang=javascript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  let queue = new PriorityQueue(arr);
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      queue.push([arr[j], arr[i]]);
    }
  }
  return queue.data[queue.data.length - k]
};

class PriorityQueue {

  constructor(arr) {
    this.data = []
    for (let i = 1; i < arr.length; i++) {
      this.data.push([arr[0], arr[i]])
    }
  }
  head() {
    return this.data[0];
  }
  tail() {
    return this.data[this.data.length - 1];
  }
  compareSize(a, b, flag = false) {
    return flag ? a[0] * b[1] >= a[1] * b[0] : a[0] * b[1] > a[1] * b[0]
  }
  push(num) {
    if (this.data.length === 0 || this.compareSize(num, this.head())) {
      this.data.unshift(num);
      return;
    }
    if (this.compareSize(this.tail(), num, true)) {
      this.data.push(num);
      return;
    }
    for (let i = 1; i < this.data.length; i++) {
      if (this.compareSize(this.data[i - 1], num, true) && this.compareSize(num, this.data[i])) {
        this.data.splice(i, 0, num);
        return;
      }
    }
  }
}
// @lc code=end

let arr = [1, 2, 3, 5],
  k = 3

// arr = [1, 7], k = 1

console.log(kthSmallestPrimeFraction(arr, k))

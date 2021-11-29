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
  let queue = new PriorityQueue(arr)
  while (k > 1) {
    let minNum = queue.pop()
    let a = minNum[0]
    let b = minNum[1]
    if (a + 1 < b) {
      queue.push([a + 1, b])
    }
    k--
    if (queue.size() === 0) return [arr[a], arr[b]]
  }
  let res = queue.pop()
  return [arr[res[0]], arr[res[1]]]
}

class PriorityQueue {
  constructor(arr) {
    this.arr = arr
    this.data = []
    for (let i = 1; i < arr.length; i++) {
      this.data.push([0, i])
    }
  }
  size () {
    return this.data.length
  }
  push (num) {
    this.data.push(num)
    this.data.sort(([a, b], [c, d]) => this.arr[a] * this.arr[d] - this.arr[b] * this.arr[c])
  }
  pop () {
    return this.data.pop()
  }
}
// @lc code=end

let arr = [1, 2, 3, 5],
  k = 3

arr = [1, 7], k = 1
arr = [1, 7, 23, 29, 47], k = 8

console.log(kthSmallestPrimeFraction(arr, k))

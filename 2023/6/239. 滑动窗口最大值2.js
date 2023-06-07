/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = []
  const stack = new MonotonicQueue(nums, k)
  for (let i = 0; i < nums.length; i++) {
    if (i < k - 1) {
      stack.push(i)
    } else {
      stack.push(i)
      res.push(stack.max())
    }
  }
  return res
}

// 单调队列
class MonotonicQueue {
  constructor(data, k) {
    this.data = data
    this.stack = []
    this.k = k
  }

  push(idx) {
    while (this.stack.length && this.data[idx] >= this.data[this.tail()]) {
      this.stack.pop()
    }
    this.stack.push(idx)
    while (this.stack.length && this.stack[0] <= idx - this.k) {
      this.stack.shift()
    }
  }

  max() {
    return this.data[this.stack[0]]
  }

  tail() {
    return this.stack[this.stack.length - 1]
  }
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3

nums = [1, 3, -1, -3, 15, 3, 6, 7]

nums = [1, 2]
k = 1

nums = [-7, -8, 7, 5, 7, 1, 6, 0]

k = 4

const res = maxSlidingWindow(nums, k)
console.log(res)

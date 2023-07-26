/**
 * 优先队列，从小到大排序
 */
class CustomPriorityQueue {
  constructor() {
    this.data = []
  }

  push(item) {
    if (!this.data.length) {
      this.data.push(item)
    } else {
      const len = this.data.length
      let i = 0
      let j = len
      while (i < j) {
        const mid = Math.floor((i + j) / 2)
        if (this.data[mid] <= item) {
          i = mid + 1
        } else {
          j = mid
        }
      }
      this.data.splice(i, 0, item)
    }
  }

  pop() {
    return this.data.pop()
  }

  peek() {
    if (this.data.length) {
      return this.data[this.data.length - 1]
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  const pq = new CustomPriorityQueue()
  let sum = 0
  for (const item of nums) {
    pq.push(item)
    sum += item
  }
  const halfSum = sum / 2
  let res = 0
  while (sum > halfSum) {
    const max = pq.pop()
    sum -= max / 2
    pq.push(max / 2)
    res++
  }
  return res
}

// test
let nums = [5, 19, 8, 1]

nums = [3, 8, 20]

const res = halveArray(nums)
console.log(res)

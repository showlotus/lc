/**
 * 优先队列，从小到大排序
 */
class PriorityQueue {
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

// module.export.PriorityQueue = PriorityQueue

const a = new PriorityQueue()

a.push(2)
a.push(1)
a.push(3)
a.push(2)
a.push(10)
a.pop()
a.push(0)

console.log(a.data)

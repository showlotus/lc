/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

class PriorityQueue {
  constructor() {
    this.queue = []
  }

  push(item) {
    let q = this.queue
    if (q.length) {
      if (item < q[0]) return q.unshift(item)
      if (item >= q[q.length - 1]) return q.push(item)
      for (let i = 0; i < q.length - 1; ++i) {
        if (q[i] <= item && item < q[i + 1]) return q.splice(i + 1, 0, item)
      }
    } else {
      q.push(item)
    }
  }

  size() {
    return this.queue.length
  }

  get(index) {
    return this.queue[index]
  }
}

var findKthLargest = function (nums, k) {
  let pq = new PriorityQueue();
  for (let i = 0; i < nums.length; ++i) {
    pq.push(nums[i])
  }
  return pq.get(pq.size() - k)
};

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
let k = 4

console.log(findKthLargest(nums, k));

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */

class PriorityQueue {
  constructor() {
    this.queue = []
  }

  // 入队
  push(item) {
    let q = this.queue
    if (q.length) {
      if (item.profit < q[0].profit) return q.unshift(item)
      if (item.profit >= q[q.length - 1].profit) return q.push(item)
      for (let i = 0; i <= q.length - 2; ++i) {
        if (q[i].profit <= item.profit && item.profit < q[i + 1].profit) return q.splice(i + 1, 0, item)
      }
    } else {
      return q.push(item)
    }
  }

  // 出队
  pop(index = 0) {
    this.queue.splice(index, 1)
  }

  // 队列内元素个数
  size() {
    return this.queue.length
  }

  // 根据索引获取元素 index 属性
  getProfit(index) {
    return this.queue[index].profit
  }

  // 根据索引获取元素 value 属性
  getCapital(index) {
    return this.queue[index].capital
  }
}

var findMaximizedCapital = function (k, w, profits, capital) {
  let pq = new PriorityQueue();
  for (let i = 0; i < profits.length; ++i) {
    pq.push({
      profit: profits[i],
      capital: capital[i]
    })
  }
  while (k > 0) {
    for (let i = pq.size() - 1; i >= 0; --i) {
      // 启动资金小于当前所有资本
      if (pq.getCapital(i) <= w) {
        w += pq.getProfit(i)
        // 找到一个最优的，从队列中删除并跳出循环
        pq.pop(i);
        break;
      }
    }
    --k
  }
  return w
}

let k = 111
let w = 12
let profits = [1, 2, 3, 4, 2, 3]
let capital = [0, 1, 1, 2, 1, 0]

for (let i = 0; i < 60000; i++) {
  profits.push(Math.round(Math.random() * 1000))
  capital.push(Math.round(Math.random() * 1000))
}

console.log(findMaximizedCapital(k, w, profits, capital))

/*
 * @lc app=leetcode.cn id=1606 lang=javascript
 *
 * [1606] 找到处理最多请求的服务器
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */

function Server(nextFreeTime = -1, deals = 0) {
  this.nextFreeTime = nextFreeTime
  this.deals = deals
}

var busiestServers = function (k, arrival, load) {
  let serverList = new Array(k).fill(0).map(() => new Server())
  let maxDeals = 0
  for (let i = 0, len = arrival.length; i < len; i++) {
    const v = arrival[i]
    let serverIdx = i % k
    let nextFreeTime = serverList[serverIdx].nextFreeTime
    if (v >= nextFreeTime) {
      serverList[serverIdx].nextFreeTime = v + load[i]
      maxDeals = Math.max(maxDeals, ++serverList[serverIdx].deals)
    } else {
      let next = (serverIdx + 1) % k
      let nums = 1
      while (serverList[next].nextFreeTime > v && nums < k) {
        next = (next + 1) % k
        nums++
      }
      if (nums === k) {
        continue
      }
      serverList[next].nextFreeTime = v + load[i]
      maxDeals = Math.max(maxDeals, ++serverList[next].deals)
    }
  }

  let res = []
  serverList.forEach((v, i) => {
    if (v.deals === maxDeals) {
      res.push(i)
    }
  })

  return res
}
// @lc code=end
var k = 3,
  arrival = [1, 2, 3, 4, 5],
  load = [5, 2, 3, 3, 3]

;(k = 3), (arrival = [1, 2, 3, 4]), (load = [1, 2, 1, 2])
;(k = 3), (arrival = [1, 2, 3]), (load = [10, 12, 11])
// ;(k = 3), (arrival = [1, 2, 3, 4, 8, 9, 10]), (load = [5, 2, 10, 3, 1, 2, 2])
// ;(k = 1), (arrival = [1]), (load = [1])

console.log(busiestServers(k, arrival, load))

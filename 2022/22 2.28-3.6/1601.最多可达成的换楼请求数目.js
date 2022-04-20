/*
 * @lc app=leetcode.cn id=1601 lang=javascript
 *
 * [1601] 最多可达成的换楼请求数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  const delta = new Array(n).fill(0)
  let zero = n
  let res = Number.MIN_SAFE_INTEGER
  let cnt = 0

  const dfs = (requests, pos) => {
    if (pos === requests.length) {
      if (zero === n) {
        res = Math.max(res, cnt)
      }
      return
    }

    dfs(requests, pos + 1)

    let z = zero
    ++cnt
    const [x, y] = requests[pos]
    zero -= delta[x] === 0 ? 1 : 0
    --delta[x]
    zero += delta[x] === 0 ? 1 : 0
    zero -= delta[y] === 0 ? 1 : 0
    ++delta[y]
    zero += delta[y] === 0 ? 1 : 0

    dfs(requests, pos + 1)

    --delta[y]
    ++delta[x]
    --cnt
    zero = z
  }

  dfs(requests, 0)
  return res
}
// @lc code=end

var n = 5,
  requests = [
    [0, 1],
    [1, 0],
    [0, 1],
    [1, 2],
    [2, 0],
    [3, 4],
  ]

console.log(maximumRequests(n, requests))

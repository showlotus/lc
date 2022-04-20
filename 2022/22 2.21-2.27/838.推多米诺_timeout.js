/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let n = dominoes.length
  let q = []
  let time = new Array(n).fill(-1)
  let force = new Array(n).fill(0).map(_ => [])
  for (let i = 0; i < n; ++i) {
    const char = dominoes[i]
    if (char !== ".") {
      q.push(i)
      time[i] = 0
      force[i].push(char)
    }
  }
  let res = new Array(n).fill(".")
  while (q.length) {
    const i = q.shift()
    if (force[i].length === 1) {
      const cur_f = force[i][0]
      res[i] = cur_f
      const next_i = cur_f === "L" ? i - 1 : i + 1
      if (next_i >= 0 && next_i < n) {
        const cur_t = time[i]
        if (time[next_i] === -1) {
          q.push(next_i)
          time[next_i] = cur_t + 1
          force[next_i].push(cur_f)
        } else if (time[next_i] === cur_t + 1) {
          force[next_i].push(cur_f)
        }
      }
    }
  }
  return res.join("")
}
// @lc code=end
var dominoes = "RR.L"
dominoes = ".L.R...LR..L.."
console.log(pushDominoes(dominoes))

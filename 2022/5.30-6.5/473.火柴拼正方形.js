/*
 * @lc app=leetcode.cn id=473 lang=javascript
 *
 * [473] 火柴拼正方形
 */

// @lc code=start
/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
  const _sum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
  const totalLen = _sum(matchsticks);
  if (totalLen % 4 !== 0) {
    return false;
  }

  matchsticks.sort((a, b) => b - a);
  const edges = new Array(4).fill(0);
  return dfs(0, matchsticks, edges, totalLen / 4);
};

function dfs(index, matchsticks, edges, len) {
  if (index === matchsticks.length) {
    return true;
  }

  for (let i = 0; i < edges.length; i++) {
    edges[i] += matchsticks[index];
    if (edges[i] <= len && dfs(index + 1, matchsticks, edges, len)) {
      return true;
    }

    edges[i] -= matchsticks[index];
  }

  return false;
}
// @lc code=end
var matchsticks = [3, 3, 3, 3, 4];

console.log(makesquare(matchsticks));

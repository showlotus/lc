/*
 * @lc app=leetcode.cn id=1079 lang=javascript
 *
 * [1079] 活字印刷
 */

// @lc code=start
/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  tiles = tiles.split("").sort((a, b) => a.codePointAt(0) - b.codePointAt(0))
  const n = tiles.length
  const visited = new Array(n).fill(false)
  return dfs(tiles, [], visited) - 1
}

const dfs = (tiles, seqs, visited) => {
  let cnt = 1
  for (let i = 0; i < tiles.length; i++) {
    if (visited[i]) {
      continue
    }
    if (i > 0 && tiles[i - 1] === tiles[i] && !visited[i - 1]) {
      continue
    }
    visited[i] = true
    cnt += dfs(tiles, [...seqs, tiles[i]], visited)
    visited[i] = false
  }
  return cnt
}
// @lc code=end
let tiles = "AAB"
tiles = "AAABBC"
tiles = "V"
tiles = "CABDA"

const res = numTilePossibilities(tiles)
console.log(res)

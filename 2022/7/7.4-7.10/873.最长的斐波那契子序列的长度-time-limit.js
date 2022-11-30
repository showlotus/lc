/*
 * @lc app=leetcode.cn id=873 lang=javascript
 *
 * [873] 最长的斐波那契子序列的长度
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  /*
   * 如果当前序列长度 < 3，则直接 push 进序列中
   * 长度 >= 3，判断当前索引对应的值是否为最后两个数字之和
   * 若相等，则 push，并且更新最大长度
   * 否则，return
   * 深度优先遍历 0~n-2
   */
  let res = 0
  const minSeqLen = 3
  const dfs = (idx, sequence, arr) => {
    if (idx >= arr.length) return
    const seqLen = sequence.length
    if (seqLen < minSeqLen - 1) {
      sequence.push(arr[idx])
    } else if (sequence[seqLen - 2] + sequence[seqLen - 1] === arr[idx]) {
      sequence.push(arr[idx])
      res = Math.max(res, sequence.length)
    }
    dfs(idx + 1, sequence, arr)
  }

  for (let i = 0, len = arr.length; i <= len - 3; ++i) {
    for (let j = i + 1; j <= len - 2; ++j) {
      dfs(j + 1, [arr[i], arr[j]], arr)
    }
  }

  return res
}
// @lc code=end
var arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr = [1, 3, 7, 11, 12, 14, 18]
// arr = [1, 2, 5]
// arr = [2, 4, 7, 8, 9, 10, 14, 15, 18, 23, 32, 50]

var res = lenLongestFibSubseq(arr)

console.log(res)

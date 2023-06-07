/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  // 贪心：
  // A 吃掉自己得分最高的前 k 个，剩下的 n - k 个都由 B 吃掉，得到分数 S1
  // B 吃掉自己得分最高的前 k 个，剩下的 n - k 个都由 A 吃掉，得到分数 S2
  const n = reward1.length

  // 在不改变原数据顺序的前提下，定义一个索引数组按得分大小进行排序
  const reward1Idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => reward1[b] - reward1[a])
  const reward2Idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => reward2[b] - reward2[a])

  // 遍历，分别统计两种得分情况
  let score1 = 0
  let score2 = 0
  for (let i = 0; i < n; i++) {
    if (i < k) {
      score1 += reward1[reward1Idx[i]]
      score2 += reward2[reward2Idx[i]]
    } else {
      score1 += reward2[reward1Idx[i]]
      score2 += reward1[reward2Idx[i]]
    }
  }

  // 返回得分的最大值
  return Math.max(score1, score2)
}

let reward1 = [1, 1, 3, 4]
let reward2 = [4, 4, 1, 1]
let k = 2

reward1 = [1, 3, 1, 4]
reward2 = [4, 4, 10, 10]

reward1 = [4, 1, 5, 3, 3]
reward2 = [3, 4, 4, 5, 2]
k = 3

const res = miceAndCheese(reward1, reward2, k)
console.log(res)

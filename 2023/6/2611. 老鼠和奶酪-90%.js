/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  // 贪心：
  // A 吃掉自己得分最高的前 k 个，剩下的 n - k 个都由 B 吃掉，得到分数 S1
  // B 吃掉自己得分最高的前 n - k 个，剩下的 k 个都由 A 吃掉，得到分数 S2
  const n = reward1.length

  // 在不改变原数据顺序的前提下，定义一个索引数组
  // 按得分大小进行降序排列，如果得分相同，则比较另一种得分情况
  // 按照另一个种得分的升序排列
  const reward1Idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => {
      if (reward1[a] !== reward1[b]) {
        return reward1[b] - reward1[a]
      } else {
        return reward2[a] - reward2[b]
      }
    })
  const reward2Idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => {
      if (reward2[a] !== reward2[b]) {
        return reward2[b] - reward2[a]
      } else {
        return reward1[a] - reward1[b]
      }
    })

  // 遍历，分别统计两种得分情况
  let score1 = 0
  let score2 = 0
  for (let i = 0; i < n; i++) {
    if (i < k) {
      score1 += reward1[reward1Idx[i]]
    } else {
      score1 += reward2[reward1Idx[i]]
    }
    if (i < n - k) {
      score2 += reward2[reward2Idx[i]]
    } else {
      score2 += reward1[reward2Idx[i]]
    }
  }

  // 返回得分的最大值
  return k === n ? score1 : Math.max(score1, score2)
}

let reward1 = [1, 1, 3, 4]
let reward2 = [4, 4, 1, 1]
let k = 2

reward1 = [1, 3, 1, 4]
reward2 = [4, 4, 10, 10]

// reward1 = [4, 1, 5, 3, 3]
// reward2 = [3, 4, 4, 5, 2]
// k = 3

// reward1 = [4, 1]
// reward2 = [3, 4]
// k = 2

// reward1 = [3, 1, 1, 3]
// reward2 = [3, 2, 3, 1]
// k = 3

reward1 = [1, 1, 4, 1, 2, 3]
reward2 = [1, 2, 4, 1, 3, 3]
k = 4

const res = miceAndCheese(reward1, reward2, k)
console.log(res)

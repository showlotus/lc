/**
 * @param {number[]} reward1
 * @param {number[]} reward2
 * @param {number} k
 * @return {number}
 */
var miceAndCheese = function (reward1, reward2, k) {
  // 贪心：
  // 假设 B 吃掉 n 个后的得分为 S，如果 A 需要吃掉 k 个
  // 如果 k != 0，每当 A 需要吃掉一个，则 B 就需要吐出来一个，且索引对应，假设为 i
  // 对应的得分变化就是 diff = reward1[i] - reward2[i]，diff 越大，最终得分越高
  // 按照 reward1[i] - reward2[i] 对索引进行降序排列

  const n = reward1.length
  const idx = new Array(n)
    .fill(0)
    .map((_, i) => i)
    .sort((a, b) => reward1[b] - reward2[b] - (reward1[a] - reward2[a]))

  let res = 0
  for (let i = 0; i < n; i++) {
    const j = idx[i]
    if (i < k) {
      res += reward1[j]
    } else {
      res += reward2[j]
    }
  }
  return res
}

let reward1 = [1, 1, 3, 4]
let reward2 = [4, 4, 1, 1]
let k = 2

reward1 = [1, 3, 1, 4]
reward2 = [4, 4, 10, 10]

// reward1 = [4, 1, 5, 3, 3]
// reward2 = [3, 4, 4, 5, 2]
// k = 3

reward1 = [4, 1]
reward2 = [3, 4]
k = 5

// reward1 = [3, 1, 1, 3]
// reward2 = [3, 2, 3, 1]
// k = 3

// reward1 = [1, 1, 4, 1, 2, 3]
// reward2 = [1, 2, 4, 1, 3, 3]
// k = 4

const res = miceAndCheese(reward1, reward2, k)
console.log(res)

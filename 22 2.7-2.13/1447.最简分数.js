/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

/* 移除当前Map中base的倍数，即 t = base * n (n >= 1), t < max */
Map.prototype.removeFractionTop = function (base, max) {
  let multiple = 1
  while ((t = multiple * base) < max) {
    if (this.has(t)) {
      this.delete(t)
    }
    ++multiple
  }
}

var simplifiedFractions = function (n) {
  if (n === 1) return []
  let res = []

  // 遍历分母
  for (let i = 2; i <= n; ++i) {

    // 可作为分子的列表
    let fractionTopMap = new Map()
    for (let k = 1; k < i; ++k) {
      fractionTopMap.set(k, 1)
    }

    // 记录分母的因子
    let divisorMap = new Map()
    for (let j = 2; j * j <= i; ++j) {
      if (i % j === 0) {
        divisorMap.set(j, 1)
        fractionTopMap.removeFractionTop(j, i)
        const m = i / j
        if (!divisorMap.has(m)) {
          divisorMap.set(m, 1)
          fractionTopMap.removeFractionTop(m, i)
        }
      }
    }

    // 将剩余的分子和分母组成分数插入到结果中
    for (let key of fractionTopMap.keys()) {
      res.push(`${ key }/${ i }`)
    }
  }

  return res
};
// @lc code=end

var simplifiedFractions2 = function (n) {
  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b)
  }

  let res = []
  for (let i = 1; i < n; ++i) {
    for (let j = i + 1; j <= n; ++j) {
      if (gcd(i, j) === 1) res.push(`${ i }/${ j }`)
    }
  }

  return res
}

var n = 14
n = 4
var res = simplifiedFractions(n)
console.log(res)
console.log(simplifiedFractions2(n))


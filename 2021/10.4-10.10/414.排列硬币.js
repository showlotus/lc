/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  /* 数学：前N项和 */
  return Math.floor(Math.pow(2 * n + 1 / 4, 1 / 2) - 1 / 2)
}

let n = 5

n = 8


console.log(arrangeCoins(n))

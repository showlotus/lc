/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let res = 0
  for (let i = 0, len = brackets.length; i < len; i++) {
    const [upper, percent] = brackets[i]
    const num = Math.min(upper, income)
    const diff = i === 0 ? num : num - brackets[i - 1][0]
    res += (diff * percent) / 100
    if (upper > income) {
      break
    }
  }
  return res
}

var brackets = [
  [3, 50],
  [7, 10],
  [12, 25]
]
var income = 10

// brackets = [
//   [1, 0],
//   [4, 25],
//   [5, 50]
// ]
// income = 2

// brackets = [[2, 50]]
// income = 0

brackets = [
  [1, 0],
  [4, 25],
  [5, 50]
]
income = 2

console.log(calculateTax(brackets, income))

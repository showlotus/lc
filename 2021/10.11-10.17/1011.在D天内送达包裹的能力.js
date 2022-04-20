/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let prevSum = [0]
  for (let i = 1; i <= weights.length; i++) {
    prevSum[i] = prevSum[i - 1] + weights[i - 1]
  }
  return prevSum
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D = 5

console.log(shipWithinDays(weights, D))

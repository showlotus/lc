/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
  if (numOnes + numZeros >= k) {
    return Math.min(numOnes, k)
  } else {
    return numOnes - Math.min(numNegOnes, k - numOnes - numZeros)
  }
}

let numOnes = 3
let numZeros = 2
let numNegOnes = 0
let k = 2

;(numOnes = 3), (numZeros = 2), (numNegOnes = 0), (k = 4)
;(numOnes = 1), (numZeros = 1), (numNegOnes = 3), (k = 5)

const res = kItemsWithMaximumSum(numOnes, numZeros, numNegOnes, k)
console.log(res)

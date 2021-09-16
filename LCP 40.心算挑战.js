/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function (cards, cnt) {
  let oddPrefixSum = [0]
  let evenPrefixSum = [0]
  cards.sort((a, b) => b - a)
  for (let i = 0, odd = 1, even = 1; i < cards.length; ++i) {
    if (cards[i] % 2 === 1) {
      oddPrefixSum[odd] = oddPrefixSum[odd - 1] + cards[i]
      odd++
    } else {
      evenPrefixSum[even] = evenPrefixSum[even - 1] + cards[i]
      even++
    }
  }

  let max = 0
  for (let odd = 0; odd < oddPrefixSum.length; odd += 2) {
    for (let even = cnt - odd; even >= 0 && even < evenPrefixSum.length; even -= 2) {
      max = Math.max(oddPrefixSum[odd] + evenPrefixSum[even], max)
    }
  }
  return max
};

let cards = [1, 2]
// cards = [1, 3, 4, 5]
let cnt = 2

console.log(maxmiumScore(cards, cnt))

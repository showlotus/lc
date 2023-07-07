/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function (finalSum) {
  // 贪心
  if (finalSum & 1) {
    return []
  }

  const res = []
  for (let i = 2; i <= finalSum; i += 2) {
    res.push(i)
    finalSum -= i
  }
  res[res.length - 1] += finalSum
  return res
}

let finalSum = 1
finalSum = 12
finalSum = 28
finalSum = 7
finalSum = 18
finalSum = 10
finalSum = 20
finalSum = 12
finalSum = 2
finalSum = 4
// finalSum = 950

const res = maximumEvenSplit(finalSum)
console.log(res)

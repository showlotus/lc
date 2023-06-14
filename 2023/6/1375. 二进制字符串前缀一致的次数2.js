/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
  /**
   * 其实不需要记录最小值 min，当 max == i + 1 时，min 一定为 1
   */
  let res = 0
  let max = 0
  for (let i = 0; i < flips.length; i++) {
    max = Math.max(max, flips[i])
    if (max === i + 1) {
      res++
    }
  }
  return res
}

let flips = [3, 2, 4, 1, 5]
flips = [4, 1, 2, 3]

const res = numTimesAllBlue(flips)
console.log(res)

/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function (flips) {
  /**
   * 用两个值维护已执行下标的最大值 max 和最小值 min
   * 当执行到第 i 步时，如果 max == i && min == 1，即当前步骤满足前缀一致
   * max == i，确定了当前已执行了 i 次步骤，并且反转的最大下标为 i
   * min == 1，则确定了这 i 次步骤中，一定包含 1 ~ i 的所有步骤，所以当前一定满足前缀一致
   */
  let res = 0
  let max = 0
  let min = flips.length + 1
  for (let i = 0; i < flips.length; i++) {
    max = Math.max(max, flips[i])
    min = Math.min(min, flips[i])
    if (max === i + 1 && min === 1) {
      res++
    }
  }
  return res
}

let flips = [3, 2, 4, 1, 5]
flips = [4, 1, 2, 3]

const res = numTimesAllBlue(flips)
console.log(res)

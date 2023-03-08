// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let res = "0."
  while (res.length <= 32 && num !== 0) {
    num *= 2
    const i = num | 0
    res += i
    num -= i
  }
  return res.length > 32 ? "ERROR" : res
}

// @lc code=end
let num = "0.625"
num = "0.1"

const res = printBin(num)
console.log(res)

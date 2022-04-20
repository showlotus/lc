/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = ""
  let carry = 0
  for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let m = Number(a[i] || 0)
    let n = Number(b[j] || 0)

    // 消耗进位
    if (carry > 0) {
      if ((m & n) === 0) {
        // 产生进位
        if ((m | n) === 1) {
          res = "0" + res
        } else {
          carry = 0
          res = "1" + res
        }
      } else {
        res = "1" + res
      }
    } else {
      carry = m & n
      res = (m ^ n) + res
    }
  }
  return carry ? "1" + res : res
}

var addBinary_optimize = function (a, b) {}

let a = "11",
  b = "1"

;(a = "1010"), (b = "1011")

a =
  "000010100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
b =
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// a = "101111001110001111100001101"
// b = "101111001100000011011110011"
let target =
  "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
console.log(addBinary(a, b) === target)

console.log(0 | 1)

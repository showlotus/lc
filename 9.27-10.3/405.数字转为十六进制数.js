/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num, scale = 16) {
  if (num === 0) return '0'
  num = num > 0 ? num : 2 ** 32 + num
  let res = ""
  while (num > 0) {
    let m = Math.floor(num / scale)
    let n = num % scale
    res = (n > 9 ? String.fromCharCode((n - 10) + 'a'.codePointAt(0)) : n.toString()) + res
    num = m
  }
  return res
};

let num = 26
num = -1
num = 0

console.log(toHex(num))

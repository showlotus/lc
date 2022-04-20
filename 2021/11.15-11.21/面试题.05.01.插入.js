/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  let binary_n = N.toString(2).padStart(j + 1, "0")
  let binary_m = M.toString(2).padStart(j - i + 1, "0")
  let tmp = new Array(binary_n.length).fill("")
  for (
    let len = binary_n.length, k = len - i - 1, t = binary_m.length - 1;
    k >= len - j - 1;
    k--, t--
  ) {
    tmp[k] = binary_m[t]
  }
  let res = ""
  for (let i = 0, len = binary_n.length; i < len; i++) {
    res += tmp[i] ? tmp[i] : binary_n[i]
  }
  return parseInt(res, 2)
}

/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits_optimize = function (N, M, i, j) {
  // ! 有个坑，N >> (j+1) !== N >> j >> 1
  // 若 j = 31，则 N >> 32 = N
  let left = (N >> j) >> 1 // 右移移除N的低位
  left = left << (j + 1) // 左移，将N的高位设为0
  let middle = M << i // M左移，右边空位赋0
  let right = N & (2 ** i - 1) // 利用与运算，取右边部分
  return left | middle | right
}

var N = 1024
var M = 19
var i = 2
var j = 6
;(N = 0), (M = 31), (i = 0), (j = 4)
;(N = 1143207437), (M = 1017033), (i = 11), (j = 31)
// ;(N = 2032243561), (M = 10), (i = 24), (j = 29)

console.log(insertBits(N, M, i, j))
console.log(insertBits_optimize(N, M, i, j))

console.log(1143207437 >> 32)

console.log()

/**
 * 1111100001001100100111000001101 res
 * 1000100001000111111011000001101
 * 1000100001000111111011000001101
 * 11111000010011001001
 */

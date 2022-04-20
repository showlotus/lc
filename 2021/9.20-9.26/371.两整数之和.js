/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  while (b !== 0) {
    let binary = (a & b) << 1
    a = a ^ b
    b = binary
  }
  return a
};

let a = 1
let b = 2

console.log(getSum(a, b))

console.log(8 & 2)
console.log(9 ^ 0)
console.log((8 & 2) << 1)
console.log(8 & 0)

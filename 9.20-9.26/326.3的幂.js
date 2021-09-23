/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let res = Math.log2(Math.abs(n)) / Math.log2(3)
  return Math.abs(parseInt(res) - res) < 1e-10
};

let n = 27
n = 21
n = 243

// console.log(isPowerOfThree(n))



for (let i = 3, j = 2; i < 2e31; i *= 3, j++) {
  if (isPowerOfThree(i)) {
    console.log(i, j - 1)
  }

}

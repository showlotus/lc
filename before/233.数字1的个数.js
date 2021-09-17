/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  let count = 0;
  let base = 1;
  while (n > 0) {

    let s = n % 10;
    if (s >= 1) {
      count += base;
      base *= 10;
    }
    n = Math.floor(n / 10);
  }
  return count;
};

let n = 20;
console.log(countDigitOne(n))

/**
 * @param {number} n
 * @return {number}
 */
var findIntegers = function (n) {
  let count = 0;
  let res = []
  for (let i = 0; i <= n; ++i) {
    if (!toBinary(i)) {
      ++count;
    } else {
      res.push(i)
    }
  }
  return count;
};

function toBinary(n) {
  let remainder = -1
  while (n > 0) {
    let m = Math.floor(n / 2) /* 商 */
    let k = n % 2 /* 余数 */
    if (k === 1 && remainder === 1) return true
    remainder = k
    n = m
  }
  return false
}

let n = 100;
// console.time('time')
for (let i = 1; i < 100; ++i) {
  console.log(findIntegers(i))
}
// console.timeEnd('time')

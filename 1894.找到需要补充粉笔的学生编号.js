/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {

  /* O(N*logK)
  let stu = 0;
  while (k > 0) {
    k -= chalk[stu];
    if (k < 0) return stu;
    stu = (stu + 1) % chalk.length
  }
  return stu; */

  let sum = 0;
  let i = 0;
  while (i < chalk.length) {
    sum += chalk[i];
    if (sum > k) return i;
    ++i;
  }
  sum = k % sum;
  i = 0;
  while (i < chalk.length) {
    sum -= chalk[i];
    if (sum < 0) return i;
    ++i;
  }
};

let chalk = [16, 29, 70, 14, 81, 16, 21, 70, 66, 45, 65, 37, 72, 58, 58, 98, 63, 6, 61, 1, 18, 37, 97, 90, 100, 75, 59, 73, 50, 100]
let k = 940635372
console.time('1')
console.log(chalkReplacer(chalk, k))
console.timeEnd('1')

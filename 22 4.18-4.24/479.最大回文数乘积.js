/*
 * @lc app=leetcode.cn id=479 lang=javascript
 *
 * [479] 最大回文数乘积
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var largestPalindrome = function (n) {
  if (n === 1) return 9;
  let end = 10 ** n - 1;
  let start = end / 10;
  for (let left = end; left > start; left--) {
    let right = left.toString().split("").reverse().join("");
    let numStr = left + right;
    let num = BigInt(numStr);
    let x = BigInt(end);
    while (x * x >= num) {
      if (num % x === BigInt(0)) {
        return num % BigInt(1337);
      }
      x--;
    }
  }
};

const isPalindromeNum = n => {
  let arr = [];
  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  }

  for (let i = 0, j = arr.length - 1; i < j; ++i, --j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
var n = 7;
console.log(largestPalindrome(n));

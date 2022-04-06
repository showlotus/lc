/*
 * @lc app=leetcode.cn id=906 lang=javascript
 *
 * [906] 超级回文数
 */

// @lc code=start
/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
var superpalindromesInRange = function (left, right) {
  let res = 0;
  const MAGIC = 10 ** 5;
  let start = BigInt(left);
  let end = BigInt(right);
  // 根据前半部分构建回文串
  // 长度为偶数
  for (let i = 1; i < MAGIC; ++i) {
    let r = String(i);
    for (let j = r.length - 1; j >= 0; --j) {
      r += r[j];
    }
    let p = parseInt(r);
    p = BigInt(p * p);
    if (p > end) break;
    if (p >= start && isReverseNumber(p)) {
      console.log(p);
      res++;
    }
  }

  // 长度为奇数
  for (let i = 1; i < MAGIC; ++i) {
    let r = String(i);
    for (let j = r.length - 2; j >= 0; --j) {
      r += r[j];
    }
    let p = parseInt(r);
    p = BigInt(p * p);
    if (p > end) break;
    if (p >= start && isReverseNumber(p)) {
      console.log(p);
      res++;
    }
  }
  return res;
};

function isReverseNumber(n) {
  let res = BigInt(0);
  let m = n;
  const ten = BigInt(10);
  while (n > 0) {
    res = res * ten + (n % ten);
    n = n / ten;
  }
  return res === m;
}
// @lc code=end

var L = "4",
  R = "1000";
L = "40000000000000000";
R = "50000000000000000";
console.log(superpalindromesInRange(L, R));

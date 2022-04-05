/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  /* 
    最大值为 10^6，即最多 1 的个数为 20，
    统计 20 一下的所有质数，降低一层复杂度，总时间复杂度为 N * logN
  */
  const oneNums = n => {
    let cnt = 0;
    while (n > 0) {
      let last = n & 1;
      cnt += last;
      n >>= 1;
    }
    return cnt;
  };
  const primeMap = new Map([
    [2, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [11, 1],
    [13, 1],
    [17, 1],
    [19, 1],
  ]);
  let res = 0;
  while (left <= right) {
    res += primeMap.has(oneNums(left++)) ? 1 : 0;
  }
  return res;
};
// @lc code=end
var left = 10,
  right = 15;
(left = 6), (right = 1000000);
console.log(countPrimeSetBits(left, right));

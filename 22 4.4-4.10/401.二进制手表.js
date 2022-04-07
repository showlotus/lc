/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  const oneNums = n => {
    let res = 0;
    while (n > 0) {
      res += n & 1;
      n >>= 1;
    }
    return res;
  };
  let res = [];
  for (let h = 0; h < 12; ++h) {
    for (let m = 0; m < 60; ++m) {
      if (oneNums(h) + oneNums(m) === turnedOn) {
        let time = `${h}:${(m + "").padStart(2, 0)}`;
        res.push(time);
      }
    }
  }
  return res;
};
// @lc code=end
var turnedOn = 6;

console.log(readBinaryWatch(turnedOn));

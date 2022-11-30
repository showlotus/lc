/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
var reachingPoints = function (sx, sy, tx, ty) {
  while (tx > sx && ty > sy && tx !== ty) {
    if (tx > ty) {
      tx %= ty;
    } else {
      ty %= tx;
    }
  }
  if (tx === sx && ty === sy) {
    return true;
  } else if (tx === sx) {
    return ty > sy && (ty - sy) % tx === 0;
  } else if (ty === sy) {
    return tx > sx && (tx - sx) % ty === 0;
  }
  return false;
};
// @lc code=end
var sx = 1,
  sy = 1,
  tx = 3,
  ty = 5;
(sx = 1), (sy = 1), (tx = 2), (ty = 2);
(sx = 1), (sy = 6), (tx = 11), (ty = 10);
console.log(reachingPoints(sx, sy, tx, ty));

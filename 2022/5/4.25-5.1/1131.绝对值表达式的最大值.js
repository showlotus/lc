/*
 * @lc app=leetcode.cn id=1131 lang=javascript
 *
 * [1131] 绝对值表达式的最大值
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
class arrMaxMin {
  constructor() {
    this.min = Number.MAX_SAFE_INTEGER;
    this.max = Number.MIN_SAFE_INTEGER;
  }

  update(val) {
    this.min = Math.min(this.min, val);
    this.max = Math.max(this.max, val);
  }

  diff() {
    return this.max - this.min;
  }
}
var maxAbsValExpr = function (arr1, arr2) {
  /**
   * |A| + |B| = Max(A+B, -A+B, A-B, -A-B)
   * 平面上两点：i:(x1, y1), j:(x2, y2)
   * 曼哈顿距离：d(i, j) = |x1-x2| + |y1-y2|
   * A = arr1[i] + arr2[i] + i
   * B = arr1[i] + arr2[i] - i
   * C = arr1[i] - arr2[i] + i
   * B = arr1[i] - arr2[i] - i
   */
  let A = new arrMaxMin(),
    B = new arrMaxMin(),
    C = new arrMaxMin(),
    D = new arrMaxMin();

  for (let i = 0, len = arr1.length; i < len; i++) {
    const x = arr1[i];
    const y = arr2[i];
    A.update(x + y + i);
    B.update(x + y - i);
    C.update(x - y + i);
    D.update(x - y - i);
  }

  return Math.max(A.diff(), B.diff(), C.diff(), D.diff());
};
// @lc code=end
var arr1 = [1, -2, -5, 0, 10],
  arr2 = [0, -2, -1, -7, -4];
// arr1 = [1, 2, 3, 4];
// arr2 = [-1, 4, 5, 6];
console.log(maxAbsValExpr(arr1, arr2));

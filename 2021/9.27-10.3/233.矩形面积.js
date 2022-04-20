/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  /* 容斥定理 */
  let a = (ax2 - ax1) * (ay2 - ay1)
  let b = (bx2 - bx1) * (by2 - by1)
  let overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1)
  let overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1)
  return a + b - Math.max(overlapHeight, 0) * Math.max(overlapWidth, 0)
};

let ax1 = -3,
  ay1 = 0,
  ax2 = 3,
  ay2 = 4,
  bx1 = 0,
  by1 = -1,
  bx2 = 9,
  by2 = 2
console.log(computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2))
console.log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4))

/* 
  bx2 > ax1 && bx2 < ax2
*/

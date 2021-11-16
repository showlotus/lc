/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  var area = 0
  var left = bottom = Number.MAX_SAFE_INTEGER
  var right = top = Number.MIN_SAFE_INTEGER
  rectangles.forEach(([x1, y1, x2, y2]) => {
    left = Math.min(x1, left)
    bottom = Math.min(y1, bottom)
    right = Math.max(x2, right)
    top = Math.max(y2, top)
    area += (x2 - x1) * (y2 - y1)
  })
  return area === (right - left) * (top - bottom)
};

var rectangles = [
  [1, 1, 3, 3],
  [3, 1, 4, 2],
  [3, 2, 4, 4],
  [1, 3, 2, 4],
  [2, 3, 3, 4]
]
rectangles = [
  [1, 1, 2, 3],
  [1, 3, 2, 4],
  [3, 1, 4, 2],
  [3, 2, 4, 4]
]
rectangles = [
  [1, 1, 3, 3],
  [3, 1, 4, 2],
  [1, 3, 2, 4],
  [3, 2, 4, 4]
]
rectangles = [
  [1, 1, 3, 3],
  [3, 1, 4, 2],
  [1, 3, 2, 4],
  [2, 2, 4, 4]
]
console.log(isRectangleCover(rectangles))

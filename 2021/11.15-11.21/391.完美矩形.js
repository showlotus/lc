/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function (rectangles) {
  var area = 0
  var left = bottom = Number.MAX_SAFE_INTEGER
  var right = top = Number.MIN_SAFE_INTEGER
  var points = new Map()
  rectangles.forEach(([x1, y1, x2, y2]) => {
    left = Math.min(x1, left)
    bottom = Math.min(y1, bottom)
    right = Math.max(x2, right)
    top = Math.max(y2, top)
    area += (x2 - x1) * (y2 - y1)
    var pointlist = [`${x1},${y1}`, `${x1},${y2}`, `${x2},${y2}`, `${x2},${y1}`]
    pointlist.forEach(point => {
      if (points.has(point)) {
        points.delete(point)
      } else {
        points.set(point, 1)
      }
    })
  })
  if (!points.has(`${left},${bottom}`)) return false
  if (!points.has(`${left},${top}`)) return false
  if (!points.has(`${right},${top}`)) return false
  if (!points.has(`${right},${bottom}`)) return false
  var pointSum = Array.from(points.values()).reduce((prev, curr) => prev + curr, 0)
  return area === (right - left) * (top - bottom) && points.size === 4 && pointSum === 4
}

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
rectangles = [[0, 0, 1, 1], [0, 1, 3, 2], [1, 0, 2, 2]]
// rectangles = [[0, 0, 1, 1], [0, 0, 1, 1], [0, 2, 1, 3]]
// rectangles = [[0, 0, 4, 1], [7, 0, 8, 2], [6, 2, 8, 3], [5, 1, 6, 3], [4, 0, 5, 1], [6, 0, 7, 2], [4, 2, 5, 3], [2, 1, 4, 3], [0, 1, 2, 2], [0, 2, 2, 3], [4, 1, 5, 2], [5, 0, 6, 1]]

rectangles = [[0, 0, 1, 1], [0, 0, 2, 1], [1, 0, 2, 1], [0, 2, 2, 3]]
console.log(isRectangleCover(rectangles))

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (!ops.length) return m * n
  let intersect = ops.reduce((prev, curr) => {
    return [Math.min(prev[0], curr[0]), Math.min(prev[1], curr[1])]
  })
  return intersect[0] * intersect[1]
};

var m = 3,
  n = 3,
  operations = [
    [2, 2],
    [3, 3],
    [1, 2],
    [2, 1]
  ]
console.log(maxCount(m, n, operations))

/**
 * @param {number[][]} points integer
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  /* O(n^3) O(1) */
  /* let count = 0
  if (points.length < 3) return count
  for (let i = 0; i < points.length; ++i) {
    for (let j = 0; j < points.length; ++j) {
      if (j === i) continue
      let distance1 = distanceSquareBetweenTwoPoints(points[i], points[j])
      for (let k = 0; k < points.length; ++k) {
        if (k === i || k === j) continue
        let distance2 = distanceSquareBetweenTwoPoints(points[i], points[k])
        if (distance1 === distance2) {
          ++count
        }
      }
    }
  }
  return count */
  let count = 0
  for (let i = 0; i < points.length; ++i) {
    let map = new Map()
    for (let j = 0; j < points.length; ++j) {
      if (j === i) continue
      let distance = (points[i][0] - points[j][0]) ** 2 + (points[i][1] - points[j][1]) ** 2
      if (map.has(distance)) {
        map.set(distance, map.get(distance) + 1)
      } else {
        map.set(distance, 1)
      }
    }
    for (const val of map.values()) {
      count += val * (val - 1)
    }
  }
  return count
}

function distanceSquareBetweenTwoPoints(point1, point2) {
  return (point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2
}

let points = [
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5]
]

console.log(numberOfBoomerangs(points))

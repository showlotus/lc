/*
 * @lc app=leetcode.cn id=497 lang=javascript
 *
 * [497] 非重叠矩形中的随机点
 */

// @lc code=start
/**
 * @param {number[][]} rects
 */
var Solution = function (rects) {
  this.arr = [0]
  this.rects = rects
  for (const rect of rects) {
    const [a, b, x, y] = rect
    this.arr.push(this.arr[this.arr.length - 1] + (x - a + 1) * (y - b + 1))
  }
}

/**
 * @return {number[]}
 */
Solution.prototype.pick = function () {
  // 随机点
  let k = (Math.random() * this.arr[this.arr.length - 1]) | 0

  // 查找这个随机点位于哪个矩形中
  const rectIdx = binarySearch(this.arr, k + 1) - 1

  // 该点位于矩形中的位置
  k -= this.arr[rectIdx]

  const rect = this.rects[rectIdx]
  const [a, b, x, y] = rect
  const col = y - b + 1
  const da = Math.floor(k / col)
  const db = k % col
  return [a + da, b + db]
}

function binarySearch(arr, k) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = left + ((right - left) >> 1)
    if (arr[mid] === k) {
      return mid
    } else if (arr[mid] > k) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
// @lc code=end

var s = new Solution([
  [-2, -2, 1, 1],
  [2, 2, 4, 6]
])

console.log(s.pick())
console.log(s.pick())
console.log(s.pick())
console.log(s.pick())

/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = []
  for (const aster of asteroids) {
    let alive = true
    while (
      alive &&
      aster < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      alive = stack[stack.length - 1] < -aster
      if (stack[stack.length - 1] <= -aster) {
        stack.pop()
      }
    }
    if (alive) {
      stack.push(aster)
    }
  }
  return stack
}
// @lc code=end

/**
 * 时间复杂度 O(N * N)，空间复杂度 O(1)
 * @param {number[]} asteroids
 * @returns
 */
var asteroidCollision1 = function (asteroids) {
  for (let i = 0; i < asteroids.length - 1; ) {
    if (asteroids[i] > 0 && asteroids[i + 1] < 0) {
      const curr = Math.abs(asteroids[i])
      const next = Math.abs(asteroids[i + 1])
      if (curr > next) {
        asteroids.splice(i + 1, 1)
      } else if (curr < next) {
        asteroids.splice(i, 1)
        if (i > 0) {
          i--
        }
      } else {
        asteroids.splice(i, 2)
        if (i > 0) {
          i--
        }
      }
    } else {
      i++
    }
  }
  return asteroids
}
var asteroids = [5, 10, -5]
asteroids = [-2, 8, -10, 9, -8]
// asteroids = [9, -2, -8]
// asteroids = [10, 2, -5]
// asteroids = [2, -5, 10, -9, 10]
// asteroids = [1, 1, -1, -2]
var res = asteroidCollision(asteroids)

console.log(res)

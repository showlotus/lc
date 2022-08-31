/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  const n = pushed.length
  let popIdx = 0
  for (let i = 0; i < n; i++) {
    stack.push(pushed[i])
    while (stack.length && stack[stack.length - 1] === popped[popIdx]) {
      stack.pop()
      popIdx++
    }
  }
  return stack.length === 0
}
// @lc code=end
var pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1]
;(pushed = [1, 2, 3, 4, 5]), (popped = [4, 3, 5, 1, 2])
;(pushed = [1]), (popped = [1])
var res = validateStackSequences(pushed, popped)
console.log(res)

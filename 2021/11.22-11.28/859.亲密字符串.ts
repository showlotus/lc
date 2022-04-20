/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) return false
  let diffCount: number = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diffCount++
    }
  }
  if (diffCount === 0) {
    if (new Set([...s]).size < s.length) {
      /* 两字符串相同且有重复字符 */
      return true
    } else {
      return false
    }
  } else if (diffCount === 2) {
    if ([...s].sort().join('') === [...goal].sort().join('')) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}
// @lc code=end

let s = 'abcd',
  goal = 'badc'

;(s = 'ab'), (goal = 'ab')
;(s = 'abcaa'), (goal = 'abcbb')
;(s = 'ab'), (goal = 'ba')
console.log(buddyStrings(s, goal))

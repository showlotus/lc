/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let numsStr = ""
  let lettersStr = ""
  for (const char of s) {
    if (isNumber(char)) {
      numsStr += char
    } else if (isWord(char)) {
      lettersStr += char
    }
  }

  if (Math.abs(numsStr.length - lettersStr.length) > 1) {
    return ""
  } else {
    let res = ""
    let i = 0
    let j = 0
    const [long, short] = [numsStr, lettersStr].sort(
      (a, b) => b.length - a.length
    )
    while (i < long.length || j < short.length) {
      res += long.charAt(i++)
      res += short.charAt(j++)
    }
    return res
  }
}

function isNumber(str) {
  return /\d/.test(str)
}

function isWord(str) {
  return /[a-z]/.test(str)
}
// @lc code=end

var s = "a0b1c2"
s = "leetcode"
s = "covid2019"
s = "ab123"
s = "1229857369"

var res = reformat(s)
console.log(res)

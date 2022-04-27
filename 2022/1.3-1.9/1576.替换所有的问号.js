/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
  let i = 0;
  let slen = s.length;
  let res = new Array(slen).fill("");
  /* 找到第一个不为？的索引位置 */
  while (s[i] === "?") i++;

  if (i === slen) {
    /* 全为？ */
    res[0] = "a";
    for (let i = 1; i < slen; i++) {
      res[i] = findTheNextLetter(res[i - 1], res[i + 1]);
    }
  } else {
    /* 先消除索引i后的？ */
    for (let j = i + 1; j < slen; j++) {
      if (s[j] === "?") {
        res[j] = findTheNextLetter(s[j - 1] === "?" ? res[j - 1] : s[j - 1], s[j + 1]);
      } else {
        res[j] = s[j];
      }
    }

    /* 再消除索引i前的？,索引i前全为？ */
    for (let j = i; j >= 0; j--) {
      if (s[j] === "?") {
        res[j] = findTheNextLetter(res[j + 1]);
      } else {
        res[j] = s[j];
      }
    }
  }
  return res.join("");
};

/**
 * 即不等于左边字母也不等于右边字母的一个字母
 * a-z:97~122 ?:63
 * @param {string} leftLetter 左边字母
 * @param {string} rightLetter 右边字母
 * @return {string}
 */
function findTheNextLetter(leftLetter, rightLetter = "?") {
  let leftVal = leftLetter.charCodeAt(0);
  let rightVal = rightLetter.charCodeAt(0);
  let Z = "z".charCodeAt(0);
  return leftVal + 1 === rightVal
    ? rightVal + 1 > Z
      ? "a"
      : String.fromCharCode(rightVal + 1)
    : leftVal + 1 > Z
    ? "a" !== rightLetter
      ? "a"
      : String.fromCharCode(rightVal + 1)
    : String.fromCharCode(leftVal + 1);
}
// @lc code=end

var s = "j?qg??b";
s = "??j?qg??b";
// s = "?j?qg??b"
// s = "????"
// s = "?"
// s = "z?a"
console.log(modifyString(s));

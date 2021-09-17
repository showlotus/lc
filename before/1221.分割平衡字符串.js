/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let sum = 0;
  let i = 0;
  let res = 0;
  while (i < s.length) {
    // 遇 "L" 加一
    if (s[i] === 'L') ++sum;

    // 遇 "R" 减一
    if (s[i] === 'R') --sum;
    if (sum === 0) ++res;
    ++i;
  }
  return res;
};

let s = "LLLLRRRR"

console.log(balancedStringSplit(s))

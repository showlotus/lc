/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function (s) {
  const A = "a".codePointAt(0);
  let len = s.length;
  let res = 0;
  let sumG = 0;
  let words = new Array(26).fill(-1);
  for (let i = 0; i < len; i++) {
    let c = s[i].codePointAt(0) - A;
    sumG += i - words[c];
    res += sumG;
    words[c] = i;
  }
  return res;
};

var s = "abbcadda";

// s = "code";

// s = "c";

console.log(appealSum(s));

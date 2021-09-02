/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  // 双指针
  let m = version1.length;
  let n = version2.length;
  let i = 0;
  let j = 0;
  while (i < m || j < n) {
    let x = 0;
    for (; i < m && version1[i] !== '.'; ++i) {
      x = x * 10 + version1[i].charCodeAt() - '0'.charCodeAt();
    }
    ++i;
    let y = 0;
    for (; j < n && version2[j] !== '.'; ++j) {
      y = y * 10 + version2[j].charCodeAt() - '0'.charCodeAt();
    }
    ++j;
    if (x !== y) {
      return x > y ? 1 : -1;
    }
  }
  return 0;
};

let v1 = "1.0.1"
let v2 = "1.0"

console.log(compareVersion(v1, v2));

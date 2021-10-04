/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let res = ''
  for (let i = s.length - 1; i >= 0; i--) {
    let tmp = k
    while (tmp > 0 && i >= 0) {
      if (s[i] !== '-') {
        res = s[i].toUpperCase() + res
        tmp--
      }
      i--
    }
    i++
    if (i !== 0) {
      res = '-' + res
    }
  }
  return res.indexOf('-') === 0 ? res.slice(1) : res
};

let S = "5F3Z-2e-9-w",
  K = 4

S = "2-5g-3-J", K = 2
S = "2-5g-3-J1", K = 5
S = '--a-a-a-a--', K = 2

console.log(licenseKeyFormatting(S, K))

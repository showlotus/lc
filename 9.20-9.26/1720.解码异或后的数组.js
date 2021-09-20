/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
  /* 异或：相同为0，不同为1 */
  let res = [first]
  for (let i = 1; i <= encoded.length; i++) {
    res[i] = res[i - 1] ^ encoded[i - 1]
  }
  return res
};

let encoded = [1, 2, 3]
let first = 1

encoded = [6, 2, 7, 3]
first = 4

console.log(decode(encoded, first))

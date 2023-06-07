/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = []
  for (let i = num.length - 1; i >= 0 || k > 0; i--) {
    if (i >= 0) {
      k += num[i]
    }
    res.push(k % 10)
    k = Math.floor(k / 10)
  }
  return res.reverse()
}

let num = [1, 2, 0, 0]
let k = 34

num = [2, 7, 4]
k = 181

num = [2, 1, 5]
k = 1806

// num = [1, 0, 9]
// k = 9891

const res = addToArrayForm(num, k)
console.log(res)

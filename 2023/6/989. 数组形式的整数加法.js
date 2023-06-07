/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  const res = []
  let one = 0
  for (let i = num.length - 1; i >= 0 || k > 0; i--) {
    const curr = (num[i] || 0) + (k % 10) + one
    if (curr >= 10) {
      res.push(curr % 10)
      one = 1
    } else {
      res.push(curr)
      one = 0
    }
    k = Math.floor(k / 10)
  }
  if (one === 1) {
    res.push(1)
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

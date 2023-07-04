/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  const m = nums.length
  const n = nums[0].length
  const compare = (a, b) => a - b
  const maxRowNums = new Array(n).fill(0)
  for (let i = 0; i < m; i++) {
    nums[i].sort(compare)
    for (let j = 0; j < n; j++) {
      maxRowNums[j] = Math.max(maxRowNums[j], nums[i][j])
    }
  }
  return maxRowNums.reduce((sum, curr) => sum + curr, 0)
}

let nums = [
  [7, 2, 1],
  [6, 4, 2],
  [6, 5, 3],
  [3, 2, 1]
]

nums = [[1]]

const res = matrixSum(nums)
console.log(res)

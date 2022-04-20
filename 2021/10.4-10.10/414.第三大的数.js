/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let count = 0
  let prevNum = 0
  let numAfterSort = []
  for (let index = 0; index < nums.length; index++) {
    if (index === 0 || nums[index] > numAfterSort[0]) {
      numAfterSort.unshift(nums[index])
    } else if (nums[index] <= numAfterSort[numAfterSort.length - 1]) {
      numAfterSort.push(nums[index])
    } else {
      for (let i = 0; i < numAfterSort.length - 1; i++) {
        if (nums[index] <= numAfterSort[i] && nums[index] > numAfterSort[i + 1]) {
          numAfterSort.splice(i + 1, 0, nums[index])
          break
        }
      }
    }
  }
  for (let i = 0; i < numAfterSort.length; i++) {
    if (i === 0 || numAfterSort[i] !== prevNum) {
      prevNum = numAfterSort[i]
      count++
    }
    if (count === 3) return numAfterSort[i]
  }
  return numAfterSort[0]
}

var thirdMax_optimize = function (nums) {
  let list = new Array(3).fill(Number.MIN_SAFE_INTEGER)
  nums.forEach(v => {
    if (v > list[0]) {
      list.pop()
      list.unshift(v)
    } else if (v > list[1] && !list.includes(v)) {
      list[2] = list[1]
      list[1] = v
    } else if (v > list[2] && !list.includes(v)) {
      list[2] = v
    }
  })
  return list[2] === Number.MIN_SAFE_INTEGER ? list[0] : list[2]
}

let arr = [3, 2, 1]
arr = [1, 2, 3]
arr = [1, 2, 2, 2]
arr = [1, 2, 2, 3]
arr = [2, 2, 3, 2, 2]
arr = [2, 2, 3, 1, 2, 3, 3, 1, 1, 0]
console.log(thirdMax(arr))
console.log(thirdMax_optimize(arr))

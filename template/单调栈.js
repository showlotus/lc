/**
 * @description: 找到每个数组元素中下一个更大的元素
 * @param {number[]} arr
 * @return {number[]}
 */
const findNextBiggerNumber = function (arr) {
  let res = []
  let stack = []
  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] < arr[i]) {
      stack.pop()
    }
    res[i] = !stack.length ? -1 : stack[stack.length - 1]
    stack.push(arr[i])
  }
  return res
}

/**
 * @description: 找到每个数组元素左侧和右侧第一个更大的元素的索引
 * @param {number[]} arr
 */
const findPrevAndNextBiggerNumber = function (nums) {
  const n = nums.length
  const left = new Array(n).fill(-1)
  const right = new Array(n).fill(-1)
  const stack = []
  for (let i = 0; i < n; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      right[stack.pop()] = i
    }
    if (stack.length) {
      left[i] = stack[stack.length - 1]
    }
    stack.push(i)
  }
  return left.map((v, i) => [v, right[i]])
}

let arr = [2, 3, 4, 1, 5]
console.log(findNextBiggerNumber(arr))
console.log(findPrevAndNextBiggerNumber(arr))

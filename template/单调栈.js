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

let arr = [2, 3, 4, 1, 5]
console.log(findNextBiggerNumber(arr))

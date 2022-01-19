/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let map = new Map()
  nums.forEach(item => {
    if (!map.has(item)) {
      map.set(item, 1)
    } else {
      map.delete(item)
    }
  })
  return Array.from(map.keys())
};

let nums = [1, 2, 1, 3, 2, 5]

nums = [-1, 0]

console.log(singleNumber(nums))

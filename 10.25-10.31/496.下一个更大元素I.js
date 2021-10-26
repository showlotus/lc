/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = new Map()
  let left = 0
  let right = 0
  let res = new Array(nums1.length).fill(-1)
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] !== nums2[right] && !map.has(nums1[left])) {
      map.set(nums2[right], right)
    } else {
      map.set(nums2[right], right)
      left++
    }
    right++
  }
  nums1.forEach((item, index) => {
    let s = map.get(item)
    while (s < nums2.length) {
      if (nums2[s] > item) {
        res[index] = nums2[s]
        break
      }
      s++
    }
  })
  return res
};

// let nums1 = [4, 1, 2],
//   nums2 = [1, 2, 3, 4]

let nums1 = [2, 4],
  nums2 = [1, 2, 3, 4]

console.log(nextGreaterElement(nums1, nums2))

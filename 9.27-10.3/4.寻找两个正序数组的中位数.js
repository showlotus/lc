/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let m = 0
  let n = 0
  let res = []
  for (let i = 0; i <= (len1 + len2) >> 1; i++) {
    if (nums2[n] === undefined || nums1[m] <= nums2[n]) {
      if (m < len1) {
        res.push(nums1[m])
        m++
      }
    } else if (n < len2) {
      res.push(nums2[n])
      n++
    }
  }
  if ((len1 + len2) % 2 === 0) {
    return (res[res.length - 1] + res[res.length - 2]) / 2
  } else {
    return res[res.length - 1]
  }
};

/* 二分优化 */
var findMedianSortedArrays2 = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let m = 0
  let n = 0
  let first = 0
  let second = 0
  for (let i = 0; i <= (len1 + len2) >> 1; i++) {
    // if (nums2[n] === undefined || nums1[m] <= nums2[n]) {
    //   if (m < len1) {
    //     res.push(nums1[m])
    //     m++
    //   }
    // } else if (n < len2) {
    //   res.push(nums2[n])
    //   n++
    // }
  }
  return (first + second) / 2
};

let nums1 = [1, 2, 3, 4, 5]
let nums2 = [2.5]
nums1 = []
nums2 = [1]

console.log(findMedianSortedArrays2(nums1, nums2))

/*
 * @lc app=leetcode.cn id=321 lang=javascript
 *
 * [321] 拼接最大数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function (nums1, nums2, k) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  if (len1 + len2 === k) {
    return merge(nums1, nums2);
  }
  let max = [];
  for (let i = 0; i <= len1; ++i) {
    if (k - i > len2 || k - i < 0) continue;
    let n1 = maxSequence(nums1, len1 - i);
    let n2 = maxSequence(nums2, len2 - k + i);
    let m = merge(n1, n2);
    if (m.length !== k) continue;
    if (compare(m, max)) {
      max = m;
    }
  }
  return max;
};

function maxSequence(num, k) {
  let stack = [];
  num.forEach(v => {
    while (k > 0 && (len = stack.length) && stack[len - 1] < v) {
      stack.pop();
      k--;
    }
    stack.push(v);
  });
  return k > 0 ? stack.slice(0, -k) : stack;
}

function merge(arr1, arr2) {
  let len1 = arr1.length;
  if (len1 === 0) return arr2;
  let len2 = arr2.length;
  if (len2 === 0) return arr1;

  let res = [];
  let i = 0;
  let j = 0;
  while (i < len1 && j < len2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr2[j++]);
    } else if (arr1[i] > arr2[j]) {
      res.push(arr1[i++]);
    } else {
      let m = i + 1;
      let n = j + 1;
      while (m < len1 && n < len2) {
        if (arr1[m] < arr2[n]) {
          res.push(arr2[j++]);
          break;
        } else if (arr1[m] > arr2[n]) {
          res.push(arr1[i++]);
          break;
        }
        m++;
        n++;
      }
      if (m === len1) {
        res.push(arr2[j++]);
      } else if (n === len2) {
        res.push(arr1[i++]);
      }
    }
  }
  if (i <= len1 - 1) {
    return res.concat(arr1.slice(i));
  } else if (j <= len2 - 1) {
    return res.concat(arr2.slice(j));
  } else {
    return res;
  }
}

function compare(arr1, arr2) {
  if (arr2.length < arr1.length) return true;
  for (let i = 0, len = arr1.length; i < len; ++i) {
    if (arr1[i] > arr2[i]) {
      return true;
    } else if (arr1[i] < arr2[i]) {
      return false;
    }
  }
  return false;
}
// @lc code=end

var nums1 = [3, 4, 6, 5];
var nums2 = [9, 1, 2, 5, 8, 3];
var k = 5;

// nums1 = [6, 7];
// nums2 = [6, 0, 4];
// k = 5;

// nums1 = [3, 9];
// nums2 = [8, 9];
// k = 3;

nums1 = [2, 5, 6, 4, 4, 0];
nums2 = [7, 3, 8, 0, 6, 5, 7, 6, 2];
k = 15;

nums1 = [3, 3, 1, 8, 2, 4, 2, 9, 2, 4, 7, 1, 9, 2, 3, 4, 0, 7, 5, 4];
nums2 = [
  9, 7, 7, 1, 3, 6, 8, 6, 9, 6, 0, 4, 3, 6, 6, 1, 0, 4, 6, 2, 2, 6, 4, 6, 0, 4, 9, 7, 4, 9, 8, 4, 9,
  8, 4, 6, 6, 5, 8, 2, 8, 6, 6, 6, 1, 0, 9, 0, 8, 0, 4, 0, 4, 4, 1, 7, 9, 8, 4, 2, 2, 0, 3, 2, 3, 9,
  1, 8, 9, 5, 2, 7, 9, 2, 7, 7, 8, 5, 4, 4, 8, 6, 5, 5, 9, 6, 1, 4, 6, 0, 8, 5, 3, 4, 2, 0, 0, 9, 5,
  2,
];
k = 100;

nums1 = [8, 1, 8, 8, 6];
nums2 = [4];
k = 2;

// nums1 = [3, 9];
// nums2 = [8, 9];
// k = 3;

nums1 = [3, 9];
nums2 = [8, 9];
k = 3;

console.log(maxNumber(nums1, nums2, k));
// console.log(merge([6, 5], [9, 8, 3]));
// console.log(compare([9, 6, 5, 8, 3], [9, 8, 6, 5, 3]));

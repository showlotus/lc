/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i
    }
  }
};

var peakIndexInMountainArray2 = function (arr) {
  let left = 1
  let right = arr.length - 2
  let mid
  while (left <= right) {
    mid = (left + right) >> 1
    if (arr[mid - 1] < arr[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return mid
};

let arr = [0, 1, 0]
arr = [1, 3, 5, 4, 2]
arr = [1, 10, 5, 2]
arr = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19]
arr = [3, 5, 3, 2, 0]
console.log(peakIndexInMountainArray2(arr))

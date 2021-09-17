/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  /* 快排 */
  for (let i = 0; i < k && i < arr.length - 1; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] > arr[j]) {
        let tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr.slice(0, k);
};

let arr = [1, 3, 5, 7, 2, 4, 6, 8]
let k = 4

console.log(smallestK(arr, k))

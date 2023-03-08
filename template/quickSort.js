function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const index = partition(arr, left, right)
    quickSort(arr, left, index - 1)
    quickSort(arr, index + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const curr = arr[left]
  let index = left
  for (let i = left + 1; i <= right; i++) {
    if (arr[i] < curr) {
      index++
      swap(arr, index, i)
    }
  }
  swap(arr, index, left)
  return index
}

function swap(arr, i, j) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

const arr = [2, 5, 8, 12, 3, 7, 23, 11]

console.log(quickSort(arr))

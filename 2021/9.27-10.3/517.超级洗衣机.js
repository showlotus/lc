/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  let sum = machines.reduce((prev, curr) => prev + curr)
  let average = sum / machines.length
  if (Number.isInteger(average)) {
    let diff = []
    for (let i = 0; i < machines.length; i++) {
      diff[i] = machines[i] - average
    }
    console.log(diff)
    let res = Math.abs(diff[0])
    for (let i = 1; i < diff.length; i++) {
      res = Math.max(res, Math.abs(diff[i] + diff[i - 1]), diff[i])
      diff[i] += diff[i - 1]
    }
    return res
  } else {
    return -1
  }
}

let machines = [1, 0, 5, 2]

machines = [0, 3, 0, 5, 4, 0]

machines = [1, 0, 5]
machines = [4, 0, 0, 4]
// machines = [1]
// machines = [1, 1, 1]
// machines = [0, 0, 11, 5, 0, 2]
// machines = [0, 0, 11, 5]
// machines = [11, 0, 5, 0]
machines = [9, 1, 8, 8, 9]
console.log(findMinMoves(machines))

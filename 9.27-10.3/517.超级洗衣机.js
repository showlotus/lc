/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  let sum = machines.reduce((prev, curr) => prev + curr)
  let average = sum / machines.length
  if (Number.isInteger(average)) {
    let res = 0
    machines.sort((a, b) => b - a)
    while (1) {
      if (machines.some(val => val !== average)) {
        let moreThan = 0
        for (let i = 0; i < machines.length; i++) {
          if (machines[i] > average) {
            moreThan += 1
            machines[i] -= 1
          } else if (machines[i] < average) {
            if (moreThan > 0) {
              machines[i] += 1
              moreThan -= 1
            }
          }
        }
        res++
        console.log(moreThan, machines, res)
      } else {
        return res
      }
    }
    return res
  } else {
    return -1
  }
};

let machines = [1, 0, 5, 2]

machines = [0, 3, 0, 5, 4, 0]

machines = [1, 0, 5]
machines = [4, 0, 0, 4]
// machines = [1]
machines = [1, 1, 1]
machines = [0, 0, 11, 5]
console.log(findMinMoves(machines))

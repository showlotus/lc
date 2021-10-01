/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  let startMap = new Map()
  let endMap = new Map()
  for (let i = 0; i < paths.length; i++) {
    startMap.set(paths[i][0], 1)
    endMap.set(paths[i][1], 1)
  }
  for (let key of endMap.keys()) {
    if (!startMap.has(key)) {
      return key
    }
  }
};

let paths = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"]
]

paths = [
  ["B", "C"],
  ["D", "B"],
  ["C", "A"]
]

paths = [
  ['a', 'b']
]

console.log(destCity(paths))

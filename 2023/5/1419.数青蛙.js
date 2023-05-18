/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  // 记录每个字符的前一个字符
  const PREV = "croakc".split("").reduce((obj, curr, idx, arr) => {
    if (idx > 0) {
      obj[curr] = arr[idx - 1]
    }
    return obj
  }, {})
  // 记录字符个数
  const count = "croak".split("").reduce((obj, curr) => {
    obj[curr] = 0
    return obj
  }, {})

  for (const s of croakOfFrogs) {
    const prev = PREV[s]
    if (count[prev] > 0) {
      count[prev]--
    } else if (s !== "c") {
      return -1
    }
    count[s]++
  }

  const GUA = "croak"
  for (let i = 0; i < GUA.length - 1; i++) {
    if (count[GUA[i]] !== 0) {
      return -1
    }
  }

  return count["k"]
}

let croakOfFrogs = "croakcroak"
// croakOfFrogs = "croakcrookc"
// croakOfFrogs = "crcoakroakc"
// croakOfFrogs = "croakcrook"

const res = minNumberOfFrogs(croakOfFrogs)
console.log(res)

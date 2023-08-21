/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  if (start === target) {
    return true
  }

  const len = start.length
  let i = 0
  let j = 0
  while (i < len && j < len) {
    while (i < len && target[i] === "_") {
      i++
    }

    // 找到下一个有效字符 start[j] == "L" | "R"
    while (j < len && start[j] === "_") {
      j++
    }

    // 当某一个字符串先遍历完后，直接跳出循环
    if (j === len || i === len) {
      break
    }

    if (target[i] !== start[j]) {
      return false
    }

    if (target[i] === "L") {
      // 如果当前字符为 "L"，则 start 中的索引 j 不能小于 target 中的索引 i
      // 因为 L 只能左移，即 i 小于等于 j 时，才可以移动到目标位置
      // 否则 L 无法移动到索引 i 的位置
      if (j < i) {
        return false
      }
    } else {
      // 同理，如果当前字符为 "R"，则 start 中的索引 j 不能大于 target 中的索引 i
      // 因为 R 只能右移，即 i 大于等于 j 时，才可以移动到目标位置
      // 否则 R 无法移动到索引 i 的位置
      if (j > i) {
        return false
      }
    }

    i++
    j++
  }

  // 遍历尾部的下划线字符
  while (i < len && target[i] === "_") {
    i++
  }
  while (j < len && start[j] === "_") {
    j++
  }

  // 判断两个字符串是否都遍历完毕
  return i === len && j === len
}

let start = "_L__R__R_"
let target = "L______RR"

;(start = "_LL__R__R_"), (target = "L___L___RR")
;(start = "_R"), (target = "R_")
;(start = "R_L_"), (target = "__LR")
;(start = "__L_R"), (target = "_L__R")
;(start = "R___"), (target = "___R")
;(start = "___L"), (target = "_L__")

const res = canChange(start, target)
console.log(res)

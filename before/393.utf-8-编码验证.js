/*
 * @lc app=leetcode.cn id=393 lang=javascript
 *
 * [393] UTF-8 编码验证
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
const oneNums = n => {
  if (n < 192) {
    return 0
  } else if (n < 224) {
    return 1
  } else if (n < 240) {
    return 2
  } else if (n < 248) {
    return 3
  }
}
var validUtf8 = function (data) {
  let head = data[0]
  if (head > 247 || (head >= 128 && head <= 191)) return false
  let nums = oneNums(head)
  for (let i = 1, len = data.length; i < len; i++) {
    let v = data[i]
    if (v > 247) return false
    if (v < 128 && nums < 0) {
      nums = 0
      continue
    }
    if (nums > 0) {
      if (v < 128 || v > 191) {
        return false
      }
      nums--
    } else {
      if (v >= 128 && v <= 191) return false
      nums = oneNums(v)
    }
  }
  return nums <= 0
}
// @lc code=end
var data = [197, 130, 1]
data = [237]
data = [235, 140, 4]
data = [228, 189, 160, 229, 165, 189, 13, 10]
data = [115, 100, 102, 231, 154, 132, 13, 10]
data = [235, 140, 129, 115, 100, 102, 231, 154, 132, 13, 10]
data = [115, 100, 102, 231, 154, 132, 13, 10]
data = [
  194, 155, 231, 184, 185, 246, 176, 131, 161, 222, 174, 227, 162, 134, 241, 154, 168, 185, 218,
]
data = [
  194, 155, 231, 184, 185, 246, 176, 131, 161, 222, 174, 227, 162, 134, 241, 154, 168, 185, 218,
  178, 229, 187, 139, 246, 178, 187, 139, 204, 146, 225, 148, 179, 245, 139, 172, 134, 193, 156,
  233, 131, 154, 240, 166, 188, 190, 216, 150, 230, 145, 144, 240, 167, 140, 163, 221, 190, 238,
  168, 139, 241, 154, 159, 164, 199, 170, 224, 173, 140, 244, 182, 143, 134, 206, 181, 227, 172,
  141, 241, 146, 159, 170, 202, 134, 230, 142, 163, 244, 172, 140, 191,
]
data = [145]

console.log(validUtf8(data))

// console.log((222).toString(2))

/*
 * @lc app=leetcode.cn id=1604 lang=javascript
 *
 * [1604] 警告一小时内使用相同员工卡大于等于三次的人
 */

// @lc code=start
/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function (keyName, keyTime) {
  // 记录每个人的打卡时间
  const map = new Map()
  for (let i = 0; i < keyName.length; i++) {
    if (map.has(keyName[i])) {
      map.get(keyName[i]).push(time2minutes(keyTime[i]))
    } else {
      map.set(keyName[i], [time2minutes(keyTime[i])])
    }
  }

  // 把人名按字典序排序
  const names = Array.from(map.keys()).sort()
  const res = []
  for (const name of names) {
    const times = map.get(name).sort((a, b) => (a > b ? 1 : -1))
    for (let i = 2; i < times.length; i++) {
      if (times[i] - times[i - 2] <= 60) {
        res.push(name)
        break
      }
    }
  }
  return res
}

const time2minutes = time => {
  const h = time.slice(0, 2)
  const m = time.slice(3)
  return Number(h) * 60 + Number(m)
}
// @lc code=end
let keyName = [
  "daniel",
  "daniel",
  "daniel",
  "luis",
  "luis",
  "luis",
  "luis",
  "alow"
]
let keyTime = [
  "11:00",
  "10:40",
  "10:00",
  "09:00",
  "11:00",
  "13:00",
  "15:00",
  "12:00"
]

// keyName = ["alice", "alice", "alice", "bob", "bob", "bob", "bob"]
// keyTime = ["12:01", "12:00", "18:00", "21:00", "21:20", "21:30", "23:00"]

// keyName = ["john", "john", "john"]
// keyTime = ["23:58", "23:59", "00:01"]

// keyName = ["leslie", "leslie", "leslie", "clare", "clare", "clare", "clare"]
// keyTime = ["13:00", "13:20", "14:00", "18:00", "18:51", "19:30", "19:49"]

// keyName = ["a", "a", "a", "a", "b", "b", "b", "b", "b", "b", "c", "c", "c", "c"]
// keyTime = [
//   "01:35",
//   "08:43",
//   "20:49",
//   "00:01",
//   "17:44",
//   "02:50",
//   "18:48",
//   "22:27",
//   "14:12",
//   "18:00",
//   "12:38",
//   "20:40",
//   "03:59",
//   "22:24"
// ]

const res = alertNames(keyName, keyTime)
console.log(res)

// console.log(moreThanOneHour("09:10", "10:10"))

// console.log(time2minutes("11:30"))

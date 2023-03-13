/*
 * @lc app=leetcode.cn id=2383 lang=javascript
 *
 * [2383] 赢得比赛需要的最少训练时长
 */

// @lc code=start
/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (
  initialEnergy,
  initialExperience,
  energy,
  experience
) {
  let res = 0
  for (let i = 0; i < energy.length; i++) {
    initialEnergy -= energy[i]
    if (initialExperience <= experience[i]) {
      res += experience[i] - initialExperience + 1
      initialExperience = experience[i] * 2 + 1
    } else {
      initialExperience += experience[i]
    }
  }
  return res + (initialEnergy <= 0 ? -initialEnergy + 1 : 0)
}
// @lc code=end

let initialEnergy = 5
let initialExperience = 3
let energy = [1, 4, 3, 2]
let experience = [2, 6, 3, 1]

// ;(initialEnergy = 2),
//   (initialExperience = 4),
//   (energy = [1]),
//   (experience = [3])
// ;(initialEnergy = 1),
//   (initialExperience = 1),
//   (energy = [1, 1, 1, 1]),
//   (experience = [1, 1, 1, 50])
;(initialEnergy = 100),
  (initialExperience = 100),
  (energy = [1, 2, 3, 4, 5, 6, 7, 8, 9]),
  (experience = [1, 2, 3, 1, 2, 3, 1, 2, 10])
;(initialEnergy = 5),
  (initialExperience = 3),
  (energy = [1, 4]),
  (experience = [2, 5])

const res = minNumberOfHours(
  initialEnergy,
  initialExperience,
  energy,
  experience
)
console.log(res)

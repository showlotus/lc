/*
 * @lc app=leetcode.cn id=1705 lang=javascript
 *
 * [1705] 吃苹果的最大数目
 */
// @lc code=start
/* 
  思路：创建一个苹果池 applePools，记录第 i 天是否可以吃到苹果，若可以：applePools[i] = 1, 
  否则不做任何处理，在JS中会默认是个 <empty item>。
  同时遍历 apples 和 days，如果 apples[i] > 0 && days[i] > 0，说明第i天有苹果吃，
  即 applePools[i] = 1。如果 days[i] - 1 > 0（说明存放时间剩余）&& apples[i] - 1 > 0（说明苹果剩余），
  则在存放时间足够的条件下，尽可能多的分配剩余苹果给到第 i 天以后的天。
  即，
  while(存放剩余时间 > 0 && 剩余苹果 > 0){ 
    applePools[i+1] = 1
    i++
    存放剩余时间--
    剩余苹果--
  }
*/
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function (apples, days) {
  var applePools = []
  apples.forEach((apple, i) => {
    var storeDays = days[i]
    var appleNums = apple
    while (appleNums > 0 && storeDays > 0) {
      while (applePools[i] === 1 && storeDays > 1) {
        i++
        storeDays--
      }
      console.log(i, storeDays)
      applePools[i++] = 1
      appleNums--
      storeDays--
      console.log('\t', applePools)
    }
    console.log('------------')
  })
  return applePools.filter(_ => _).length
};
// @lc code=end

var apples = [1, 2, 3, 5, 2],
  days = [3, 2, 1, 4, 2]

// apples = [3, 0, 0, 0, 0, 2], days = [3, 0, 0, 0, 0, 2]
// apples = [3], days = [1]
apples = [2, 1, 10], days = [2, 10, 1]
console.log(eatenApples(apples, days))

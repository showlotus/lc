/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let res = 0
  timeSeries.reduce((prev, curr) => {
    res += Math.min(curr - prev, duration)
    return curr
  })
  return res + duration
};

var timeSeries = [1, 4],
  duration = 2

timeSeries = [1, 2, 2, 2], duration = 2
timeSeries = [0], duration = 2
timeSeries = [1, 2, 3, 4, 5, 6, 7, 8, 9], duration = 1


console.log(findPoisonedDuration(timeSeries, duration))

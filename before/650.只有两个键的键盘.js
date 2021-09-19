/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n === 1) return 0
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return minSteps(i) + minSteps(n / i)
    }
  }
  return n
};

function isPrime(n) {
  for (let i = 2; i * i < n; ++i) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}


let n = 280
n = 120
// n = 111
// n = 40
n = 17
n = 999
// n = 1
// n = 9
console.log(minSteps(n))
console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))

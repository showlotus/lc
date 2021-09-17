/**
 * @param {number} n
 * @return {number}
 */
/* 
  f0 = 0
  f1 = 1
  f2 = 1
*/
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a0 = 0;
  let a1 = 1;
  while (n > 1) {
    let tmp = a0 + a1;
    a0 = a1 % (1e9 + 7);
    a1 = tmp % (1e9 + 7);
    --n;
  }
  return a1;
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(81));

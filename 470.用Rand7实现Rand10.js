/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
function rand7() {
  return Math.floor(Math.random() * 7 + 1);
}
var rand10 = function () {
  let a = rand7();
  let b = rand7();
  if (a > 4 && b < 4) {
    return rand10();
  } else {
    return (a + b) % 10 + 1;
  }
};
console.log(rand10());

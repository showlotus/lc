/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  /**
   * 异或运算性质：a ^ b = c 等价于 b = a ^ c
   */
  const HIGHT_BIT = 30;
  let x = 0;
  for (let k = HIGHT_BIT; k >= 0; --k) {
    const seen = new Set();
    for (const num of nums) {
      seen.add(num >> k);
    }
    console.log(seen);
  }
};

var nums = [3, 10, 5, 25, 2, 8, 9999999];

console.log(findMaximumXOR(nums));

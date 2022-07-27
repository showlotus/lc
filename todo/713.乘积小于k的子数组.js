/*
 * @lc app=leetcode.cn id=713 lang=javascript
 *
 * [713] 乘积小于K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let res = 0;
    let len = nums.length;
    const dfs = (idx, seq, k) => {
        if (idx >= len || nums[idx] * seq >= k) return;
        res++;
        seq *= nums[idx];
        dfs(idx + 1, seq, k);
    };

    nums.forEach((v, i) => {
        dfs(i, 1, k);
    });

    return res;
};

// @lc code=end
var nums = [10, 5, 2, 6],
    k = 1000;

// nums = [1, 2, 3];
// k = 0;
console.log(numSubarrayProductLessThanK(nums, k));

/*
 * @lc app=leetcode.cn id=388 lang=javascript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  let n = input.length;
  let stack = [];
  let res = 0;
  let p = 0;

  while (p < n) {
    let depth = 1;
    while (p < n && input[p] === "\t") {
      p++;
      depth++;
    }

    let isFile = false;
    let len = 0;
    while (p < n && input[p] !== "\n") {
      if (input[p] === ".") {
        isFile = true;
      }
      p++;
      len++;
    }

    // 跳过换行
    p++;

    // 移除栈中和当前同级的目录
    while (stack.length >= depth) {
      stack.pop();
    }

    if (stack.length) {
      len += stack[stack.length - 1] + 1;
    }

    if (isFile) {
      res = Math.max(res, len);
    } else {
      stack.push(len);
    }
  }
  return res;
};
// @lc code=end
var input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
console.log(lengthLongestPath(input));

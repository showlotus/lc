/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  /* 去除多余的/和. */
  let path1 = path.replace(/\/{2,}/g, "/").replace(/\/+$/, "");
  let dirNameList = path1.split("/");
  let res = [];
  dirNameList.forEach(dir => {
    if (dir === "..") {
      res.pop();
    } else if (!["", "."].includes(dir)) {
      res.push(dir);
    }
  });
  return "/" + res.join("/");
};
// @lc code=end

var path = "/home/";
// path = "/home///f//../oo/../../.."
path = "/home///f//../oo/..";
path = "/../";
path = "/a/./b/../../c/";
console.log(simplifyPath(path));

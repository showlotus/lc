/*
 * @lc app=leetcode.cn id=1233 lang=javascript
 *
 * [1233] 删除子文件夹
 */

// @lc code=start
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  folder = folder.sort()
  const res = [folder[0]]
  for (let i = 1; i < folder.length; i++) {
    if (!folder[i].startsWith(res[res.length - 1] + "/")) {
      res.push(folder[i])
    }
  }
  return res
}
// @lc code=end
let folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]
// folder = ["/a", "/a/b/c", "/a/b/d"]
// folder = ["/a/b/c", "/a/b/ca", "/a/b/d"]

const res = removeSubfolders(folder)
console.log(res)

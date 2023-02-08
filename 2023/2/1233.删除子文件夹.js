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
  // 构建字典树
  const trie = new Trie()
  for (let i = 0; i < folder.length; i++) {
    const paths = folder[i].split("/")
    let currTrie = trie
    for (const path of paths) {
      if (!currTrie.children.has(path)) {
        currTrie.children.set(path, new Trie())
      }
      currTrie = currTrie.children.get(path)
    }
    // ref == -1 说明是中间节点
    // ref >= 0 说明目录中存在该节点
    currTrie.ref = i
  }

  const res = []
  const dfs = (folder, res, curr) => {
    if (curr.ref !== -1) {
      res.push(folder[curr.ref])
      return
    }
    for (const child of curr.children.values()) {
      dfs(folder, res, child)
    }
  }
  dfs(folder, res, trie)
  return res
}

class Trie {
  constructor() {
    this.ref = -1
    this.children = new Map()
  }
}
// @lc code=end
let folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]
folder = ["/a/b/c", "/a/b/ca", "/a/b/d"]
folder = ["/a", "/a/b/c", "/a/b/d"]

const res = removeSubfolders(folder)
console.log(res)

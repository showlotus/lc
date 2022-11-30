/*
 * @lc app=leetcode.cn id=648 lang=javascript
 *
 * [648] 单词替换
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  // 构建字典树
  const trie = new Trie()
  for (const d of dictionary) {
    let curr = trie
    for (const s of d) {
      if (!curr.children.has(s)) {
        curr.children.set(s, new Trie())
      }
      curr = curr.children.get(s)
    }
    // 添加尾标记
    curr.children.set("#", new Trie())
  }

  const words = sentence.split(" ")
  const res = []
  for (const w of words) {
    const root = findRoot(w, trie)
    res.push(root)
  }
  return res.join(" ")
}

function findRoot(word, trie) {
  let root = ""
  let curr = trie
  for (const w of word) {
    if (curr.children.has("#")) {
      return root
    }
    if (!curr.children.has(w)) {
      return word
    }
    root += w
    curr = curr.children.get(w)
  }
  return root
}

class Trie {
  constructor() {
    this.children = new Map()
  }
}
// @lc code=end
var dictionary = ["cat", "bat", "rat", "cat"]
var sentence = "the cattle was rattled by the battery"

dictionary = ["a", "b", "c"]
sentence = "aadsfasf absbs bbab cadsfafs"

var res = replaceWords(dictionary, sentence)

console.log(res)

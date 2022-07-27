/*
 * @lc app=leetcode.cn id=745 lang=javascript
 *
 * [745] 前缀和后缀搜索
 */

// @lc code=start
/**
 * @param {string[]} words
 */
var WordFilter = function (words) {
  const prefTrie = new Trie()
  const suffTrie = new Trie()

  for (let i = 0; i < words.length; ++i) {
    add(prefTrie, words[i], i, false)
    add(suffTrie, words[i], i, true)
  }
  console.log(prefTrie)
  console.log(suffTrie)

  function add(trie, str, idx, isTurn) {
    const n = str.length
    trie.idxs.push(idx)
    for (let i = isTurn ? n - 1 : 0; i >= 0 && i < n; i += isTurn ? -1 : 1) {
      const u = str.charCodeAt(i) - "a".charCodeAt(0)
      trie.children[u] = trie.children[u] || new Trie()
      trie = trie.children[u]
      trie.idxs.push(idx)
    }
  }

  function query(a, b) {}
}

/**
 * @param {string} pref
 * @param {string} suff
 * @return {number}
 */
WordFilter.prototype.f = function (pref, suff) {
  const dic = `${pref}#${suff}`
  if (this.dictionary.has(dic)) {
    return this.dictionary.get(dic)
  }
  return -1
}

class Trie {
  constructor() {
    this.children = []
    this.idxs = []
  }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * var obj = new WordFilter(words)
 * var param_1 = obj.f(pref,suff)
 */
// @lc code=end
var wf = new WordFilter(["apple", "ape"])
// var res = wf.f("ap", "e")
// console.log(wf.dictionary)
// console.log(res)

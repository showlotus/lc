/*
 * @lc app=leetcode.cn id=432 lang=javascript
 *
 * [432] 全 O(1) 的数据结构
 */

// @lc code=start

class Node {
  constructor(key, count) {
    this.count = count || 0
    this.keys = new Set()
    this.keys.add(key || "")
  }

  insert(node) {
    node.prev = this
    node.next = this.next
    node.prev.next = node
    node.next.prev = node
    return node
  }

  remove() {
    this.prev.next = this.next
    this.next.prev = this.prev
  }
}

var AllOne = function () {
  this.root = new Node()
  this.root.prev = this.root
  this.root.next = this.root
  this.nodes = new Map()
}

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
  if (!this.nodes.has(key)) {
    if (this.root.next === this.root || this.root.next.count > 1) {
      this.nodes.set(key, this.root.insert(new Node(key, 1)))
    } else {
      this.root.next.keys.add(key)
      this.nodes.set(key, this.root.next)
    }
  } else {
    const curr = this.nodes.get(key)
    const next = curr.next
    if (next === this.root || next.count > curr.count + 1) {
      this.nodes.set(key, curr.insert(new Node(key, curr.count + 1)))
    } else {
      next.keys.add(key)
      this.nodes.set(key, next)
    }
    curr.keys.delete(key)
    if (curr.keys.size === 0) {
      curr.remove()
    }
  }
}

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
  const curr = this.nodes.get(key)
  if (curr.count === 1) {
    this.nodes.delete(key)
  } else {
    const prev = curr.prev
    if (prev === this.root || prev.count < curr.count - 1) {
      this.nodes.set(key, curr.prev.insert(new Node(key, curr.count - 1)))
    } else {
      prev.keys.add(key)
      this.nodes.set(key, prev)
    }
  }

  curr.keys.delete(key)
  if (curr.keys.size === 0) {
    curr.remove()
  }
}

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
  if (!this.root.prev) {
    return ""
  }

  let maxKey = ""
  for (let key of this.root.prev.keys) {
    maxKey = key
    break
  }
  return maxKey
}

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
  if (!this.root.next) {
    return ""
  }

  let minKey = ""
  for (let key of this.root.next.keys) {
    minKey = key
    break
  }
  return minKey
}

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
// @lc code=end

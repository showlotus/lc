/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head
  let p = head
  while (p.next) {
    if (p.next && p.next.val === p.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return head
}

// @lc code=end

const { Array2ListNode, ListNode2Array } = require("../libs/list.js")

var head = Array2ListNode([1, 1, 2])
// var head = Array2ListNode([1, 1, 2, 3, 3])

console.log(ListNode2Array(deleteDuplicates(head)))

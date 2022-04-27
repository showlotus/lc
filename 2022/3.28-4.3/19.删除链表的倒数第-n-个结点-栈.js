/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head)
  let p = dummy
  let stack = []
  while (p.next) {
    p = p.next
    stack.push(p)
  }

  while (n > 0) {
    stack.pop()
    n--
  }
  let prevNode = stack.pop() || dummy
  prevNode.next = prevNode.next.next
  return dummy.next
}
// @lc code=end
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
const { Array2ListNode, ListNode2Array } = require("../libs/list.js")
var head = [1, 2, 3, 4, 5],
  n = 2
// console.log()
// ;(head = [1, 2]), (n = 2)
console.log(ListNode2Array(removeNthFromEnd(Array2ListNode(head), n)))

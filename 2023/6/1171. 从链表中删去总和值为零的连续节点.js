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
var removeZeroSumSublists = function (head) {
  let dummy = new ListNode(0)
  dummy.next = head
  let prefix = 0
  let loc = {}
  for (let node = dummy; node !== null; node = node.next) {
    prefix += node.val
    loc[prefix] = node
  }

  prefix = 0
  for (let node = dummy; node !== null; node = node.next) {
    prefix += node.val
    node.next = loc[prefix].next
  }

  return dummy.next
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const { Array2ListNode } = require("../../libs/list")
let head = [1, 2, -3, 3, 1]

const list = Array2ListNode(head)
console.log(removeZeroSumSublists(list))

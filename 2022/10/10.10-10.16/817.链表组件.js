/*
 * @lc app=leetcode.cn id=817 lang=javascript
 *
 * [817] 链表组件
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
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  let res = 0
  let curr = 0
  const map = new Set(nums)
  while (head) {
    if (map.has(head.val)) {
      curr++
    } else if (curr > 0) {
      res++
      curr = 0
    }
    head = head.next
  }
  return res + (curr > 0 ? 1 : 0)
}
// @lc code=end

const { Array2ListNode } = require("../../libs/list")
let head = [0, 1, 2, 3]
let nums = [0, 1, 3]

// head = [0, 1, 2, 3, 4]
// nums = [0, 1, 2, 4]

// head = [0, 1, 2]
// nums = [0, 2]

let res = numComponents(Array2ListNode(head), nums)
console.log(res)

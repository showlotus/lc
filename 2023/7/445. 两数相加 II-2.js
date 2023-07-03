/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const stack1 = []
  const stack2 = []
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }

  let head = new ListNode(0)
  let temp = 0
  while (stack1.length || stack2.length) {
    const sum = (stack1.pop() || 0) + (stack2.pop() || 0)
    head.val = (sum + temp) % 10
    temp = Math.floor((sum + temp) / 10)
    if (stack1.length || stack2.length) {
      const newHead = new ListNode(0)
      newHead.next = head
      head = newHead
    }
  }

  if (temp) {
    const newHead = new ListNode(temp)
    newHead.next = head
    head = newHead
  }
  return head
}

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

let list1 = {
  val: 7,
  next: {
    val: 2,
    next: {
      val: 4,
      next: {
        val: 3,
        next: null
      }
    }
  }
}

let list2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null
    }
  }
}

list1 = new ListNode(5)
list2 = new ListNode(5)

const res = addTwoNumbers(list1, list2)

console.log(res)
console.log(res.next)

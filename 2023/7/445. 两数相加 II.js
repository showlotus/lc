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
  let head1 = reverseList(l1)
  let head2 = reverseList(l2)

  let temp = 0
  const res = new ListNode(0)
  let head = res
  while (head1 || head2) {
    const sum = (head1 ? head1.val : 0) + (head2 ? head2.val : 0)
    head.val = (sum + temp) % 10
    temp = Math.floor((sum + temp) / 10)

    head1 = head1 && head1.next ? head1.next : null
    head2 = head2 && head2.next ? head2.next : null

    if (head1 || head2) {
      head.next = new ListNode(0)
      head = head.next
    }
  }
  if (temp) {
    head.next = new ListNode(temp)
  }
  return reverseList(res)
}

/**
 * 反转链表
 */
function reverseList(list) {
  const stack = []
  let head = list
  while (head && head.next) {
    stack.push(head)
    head = head.next
  }
  // 上述循环结束之后，head 指向尾部
  const tail = head
  while (stack.length) {
    head.next = stack.pop()
    head = head.next
  }
  head.next = null
  return tail
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

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
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let ans = new ListNode()
  let head = ans
  while (l1 || l2) {
    let num1 = l1 ? l1.val : 0
    let num2 = l2 ? l2.val : 0
    head.val = (num1 + num2 + carry) % 10
    carry = Math.floor((num1 + num2 + carry) / 10)
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    if (l1 || l2) {
      head.next = new ListNode()
      head = head.next
    }
  }
  /* 进位不为0，再添一位 */
  if (carry) {
    head.next = new ListNode(carry, null)
  }
  return ans
};

function Array2ListNode(arr) {
  let list = new ListNode()
  let head = list
  for (let i = 0; i < arr.length; i++) {
    head.val = arr[i]
    head.next = new ListNode()
    if (i + 1 < arr.length) {
      head = head.next
    }
  }
  return list
}

let l1 = Array2ListNode([2, 4, 3])
let l2 = Array2ListNode([5, 6, 4])

// l1 = Array2ListNode([9, 9, 9, 9, 9, 9, 9])
// l2 = Array2ListNode([9, 9, 9, 9])

let ans = addTwoNumbers(l1, l2)
let res = []
while (ans) {
  res.push(ans.val)
  ans = ans.next
}
console.log(res.join(' '))

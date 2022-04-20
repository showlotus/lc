/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let listLen = 0
  let s = head
  while (s) {
    listLen++
    s = s.next
  }
  s = head
  let res = []
  while (k > 0) {
    let maxSplitLen = Math.max(Math.ceil(listLen / k), 1)
    listLen -= maxSplitLen
    let splitList = s
    let sl = splitList
    while (maxSplitLen > 1) {
      if (sl && sl.next) {
        sl = sl.next
      }
      if (s && s.next) {
        s = s.next
      }
      maxSplitLen--
    }

    s = s && s.next ? s.next : null
    sl && (sl.next = null)
    res.push(splitList)
    k--
  }
  return res
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function Array2ListNode(arr) {
  let list = new ListNode()
  let head = list
  for (let i = 0; i < arr.length; i++) {
    head.val = arr[i]
    if (i < arr.length - 1) {
      head.next = new ListNode()
      head = head.next
    }
  }
  return list
}

function ListNode2Array(listnode) {
  let res = []
  while (listnode) {
    res.push(listnode.val)
    listnode = listnode.next
  }
  return res
}

let root = Array2ListNode([1, 2, 3, 4, 5])

// root = Array2ListNode([1, 2, 3, 4, 5, 6, 7, 8, 9])

console.log(splitListToParts(root, 4))

// console.log(ListNode2Array(root))

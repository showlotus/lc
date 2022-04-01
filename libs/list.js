function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

module.exports.Array2ListNode = function (arr) {
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

module.exports.ListNode2Array = function (listnode) {
  let res = []
  while (listnode.next) {
    res.push(listnode.val)
    listnode = listnode.next
  }
  return res
}

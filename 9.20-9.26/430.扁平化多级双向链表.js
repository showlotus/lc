/*
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  let node = new Node()
  node.next = head
  while (head) {
    if (head.child) {
      let tmp = head.next
      let chead = flatten(head.child)
      head.next = chead
      chead.prev = head

    } else {
      head = head.next
    }
  }
};

function Node(val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function Array2BinaryTree(arr) {
  if (!arr.length) return null;
  const arrClone = arr.slice(0);
  const len = arrClone.length;
  for (let i = len - 1; i >= 0; i--) {
    arrClone[i] = new TreeNode(arrClone[i]);
    arrClone[i].left = i * 2 + 1 < len ? arrClone[2 * i + 1] : null;
    arrClone[i].right = i * 2 + 2 < len ? arrClone[2 * i + 2] : null;
  }
  return arrClone[0];
}

// let arr = [1, 2, 3, 4, 5, 6, null, 1];

// console.log(Array2BinaryTree(arr));

module.exports.Array2BinaryTree = Array2BinaryTree;

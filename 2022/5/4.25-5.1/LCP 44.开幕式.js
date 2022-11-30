/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var numColor = function (root) {
  let map = new Map();

  const dfs = root => {
    if (!root) return;
    if (!map.has(root.val)) {
      map.set(root.val, 1);
    }
    dfs(root.left);
    dfs(root.right);
  };

  dfs(root);

  return map.size;
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 2,
      left: {
        val: 5,
        right: {
          val: 1,
        },
      },
    },
  },
};

console.log(numColor(root));

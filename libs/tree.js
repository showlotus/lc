function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function Array2BinaryTree(arr, index = 0) {
  if (!arr || arr[index] === null || index >= arr.length) {
    return null
  }
  const node = new TreeNode(arr[index])
  node.left = Array2BinaryTree(arr, index * 2 + 1)
  node.right = Array2BinaryTree(arr, index * 2 + 2)

  return node
}

function Array2Tree(arr) {
  const arrClone = JSON.parse(JSON.stringify(arr))
  const map = new Map()
  const defaultRoot = { id: -1, parentId: null, val: -1, label: "root" }
  let root = null
  arrClone.forEach(v => {
    v.children = []
    map.set(v.id, v)
    if (v.parentId == null) {
      root = v
    }
  })

  root = root || defaultRoot
  root.children = root.children || []
  const treeSet = new Set()
  arrClone.forEach(node => {
    const parentNode = map.get(node.parentId)
    if (parentNode) {
      parentNode.children.push(node)
      if (!treeSet.has(parentNode.id)) {
        treeSet.add(parentNode.id)
        root.children.push(parentNode)
      }
    } else if (!treeSet.has(node.id)) {
      root.children.push(node)
      treeSet.add(node.id)
    }
  })
  // root.children.sort((a, b) => a.id - b.id)
  return root
}

function Tree2Array(tree) {
  const arr = []
  const stack = [tree]
  while (stack.length) {
    const currNode = stack.shift()
    if (currNode.children && currNode.children.length) {
      for (const child of currNode.children) {
        stack.push(child)
      }
    }
    delete currNode.children
    arr.push(currNode)
  }
  return arr.sort((a, b) => a.id - b.id)
}

function randomData(n = 20) {
  return new Array(n).fill(0).map((v, i) => {
    return {
      id: i,
      parentId: (Math.random() * 30) | (0 + i + 1),
      val: i + 1,
      label: String(i + 1).repeat(i)
    }
  })
}

// const arr = randomData()

// console.log(arr)
// const tree = Array2Tree(arr)

// console.log(Tree2Array(tree))
// console.log(Array2Tree(arr))

let arr = [1, 2, 3, 4, 5, 6, null, 1]

arr = [1, 2, 3, 4, null, 5, 6, null, null, 7]

// console.log(Array2BinaryTree(arr))

module.exports.Array2BinaryTree = Array2BinaryTree

/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  const res = [];
  if (n === 1) {
    res.push(0);
    return res;
  }

  const nodeEdges = new Array(n).fill(0).map(() => new Array());
  edges.forEach(edge => {
    nodeEdges[edge[0]].push(edge[1]);
    nodeEdges[edge[1]].push(edge[0]);
  });

  const parent = new Array(n).fill(-1);

  const x = findLongestNode(0, parent, nodeEdges);
  let y = findLongestNode(x, parent, nodeEdges);
  const path = [];
  parent[x] = -1;
  while (y !== -1) {
    path.push(y);
    y = parent[y];
  }

  const m = path.length;
  if (m % 2 === 0) {
    res.push(path[(m >> 1) - 1]);
  }
  res.push(path[m >> 1]);
  return res;
};

const findLongestNode = (startNode, parent, nodeEdges) => {
  const n = nodeEdges.length;
  const queue = [];
  const visit = new Array(n).fill(false);
  queue.push(startNode);
  visit[startNode] = true;
  let node = -1;

  while (queue.length) {
    const curr = queue.shift();
    node = curr;
    nodeEdges[curr].forEach(v => {
      if (!visit[v]) {
        visit[v] = true;
        parent[v] = curr;
        queue.push(v);
      }
    });
  }
  return node;
};
// @lc code=end
var n = 6,
  edges = [
    [3, 0],
    [3, 1],
    [3, 2],
    [3, 4],
    [5, 4],
  ];
n = 4;
edges = [
  [1, 0],
  [1, 2],
  [1, 3],
];
console.log(findMinHeightTrees(n, edges));

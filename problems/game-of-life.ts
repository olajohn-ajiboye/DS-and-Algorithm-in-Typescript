const countNeigbours = (board, rowIdx, colIdx) => {
  let neigbours = 0;

  // up neigbour
  if (board[rowIdx - 1]) {
    if (board[rowIdx - 1][colIdx] === 1 || board[rowIdx - 1][colIdx] === -1)
      neigbours++;
    if (
      board[rowIdx - 1][colIdx + 1] === 1 ||
      board[rowIdx - 1][colIdx + 1] === -1
    )
      neigbours++;
    if (
      board[rowIdx - 1][colIdx - 1] === 1 ||
      board[rowIdx - 1][colIdx - 1] === -1
    )
      neigbours++;
  }
  if (board[rowIdx + 1]) {
    if (board[rowIdx + 1][colIdx] === 1 || board[rowIdx + 1][colIdx] === -1)
      neigbours++;
    if (
      board[rowIdx + 1][colIdx + 1] === 1 ||
      board[rowIdx + 1][colIdx + 1] === -1
    )
      neigbours++;
    if (
      board[rowIdx + 1][colIdx - 1] === 1 ||
      board[rowIdx + 1][colIdx - 1] === -1
    )
      neigbours++;
  }
  // left
  if (board[rowIdx][colIdx - 1] === 1 || board[rowIdx][colIdx - 1] === -1)
    neigbours++;
  // right
  if (board[rowIdx][colIdx + 1] === 1 || board[rowIdx][colIdx + 1] === -1)
    neigbours++;

  return neigbours;
};

var gameOfLife = function (board) {
  for (const [rowIdx, row] of board.entries()) {
    for (const [colIdx] of row.entries()) {
      const liveNeigbours = countNeigbours(board, rowIdx, colIdx);
      if (
        board[rowIdx][colIdx] === 1 &&
        (liveNeigbours < 2 || liveNeigbours > 3)
      ) {
        board[rowIdx][colIdx] = -1;
      }
      if (board[rowIdx][colIdx] === 0 && liveNeigbours === 3) {
        board[rowIdx][colIdx] = 2;
      }
    }
  }

  for (const [rowIdx, row] of board.entries()) {
    for (const [colIdx] of row.entries()) {
      if (board[rowIdx][colIdx] === 2) {
        board[rowIdx][colIdx] = 1;
      }
      if (board[rowIdx][colIdx] === -1) {
        board[rowIdx][colIdx] = 0;
      }
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rowLength = matrix.length;
  const colLength = matrix[0].length;
  const colmnSet = new Set();
  const rowSet = new Set();

  for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
    for (let colIdx = 0; colIdx < colLength; colIdx++) {
      if (matrix[rowIdx][colIdx] === 0) {
        console.log('hey');
        colmnSet.add(colIdx);
        rowSet.add(rowIdx);
      }
    }
  }
  console.log(colmnSet, rowSet);

  for (let rowIdx = 0; rowIdx < rowLength; rowIdx++) {
    for (let colIdx = 0; colIdx < colLength; colIdx++) {
      if (colmnSet.has(colIdx) || rowSet.has(rowIdx)) {
        matrix[rowIdx][colIdx];
      }
    }
  }
};

var findSecondMinimumValue = function (root) {
  const set = new Set();
  return Array.from(preOrderTraversal(root, set))[1];
};

const preOrderTraversal = (node, set) => {
  if (!node) return;
  set.add(node.val);
  preOrderTraversal(node.left, set);
  preOrderTraversal(node.right, set);
  return set;
};

var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const currentLevel = [];
    queue.forEach(() => {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    });
    result.push(currentLevel);
  }
  return result;
};

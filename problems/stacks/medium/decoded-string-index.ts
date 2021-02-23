function getRealIndex(index: number, stack: string[]): any {
  const maxLength = Number.MAX_SAFE_INTEGER;
  if (stack.length > maxLength) {
    // break array into 2
    const half = stack.length / 2;
    const secondHalf = stack.splice(half, stack.length - 1);
    return secondHalf[half + (index - 1)];
  } else {
    return stack[index - 1];
  }
}
function decodeAtIndex(S: string, K: number) {
  const stack: string[] = [];

  S.split('').forEach((s) => {
    // we can only have numbers and strings
    if (typeof +s === 'number' && isNaN(+s)) {
      stack.push(s);
    } else {
      const currentTape = stack.join('');
      const stringToWrite = currentTape.repeat(s - 1);
      stack.push(stringToWrite);
    }
  });
  const decoded = stack.join('').split('');
  return getRealIndex(K, decoded);
}

//  function TreeNode(val, left, right) {
//        this.val = (val===undefined ? 0 : val)
//        this.left = (left===undefined ? null : left)
//         * this.right = (right === undefined ? null : right)
//             *

var rangeSumBST = function (root: TreeNode, low: number, high: number) {
  let sum = 0;

  let traverse = (node: TreeNode) => {
    if (!node) {
      return;
    }
    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }
    traverse(node.left);
    traverse(node.right);
  };
  traverse(root);
  return sum;
};

function increasingBST(root: TreeNode | null): TreeNode | null {
  const traverse = (node: TreeNode) => {
    if (!node) return;

    /// swap value
    // make the left child the right child of            right
    while (node.left && node.right) {
      if (node.left > node.right) {
        // swap
        node.right.right = node.left;
      }
    }
    traverse(node.left);
    traverse(node.right);
  };

  traverse(root);
  return root;
}


const add = (data: any,root:TreeNode) => {
  const newNode:TreeNode = new TreeNode(data)
  if (!root) {
      this.root = newNode
    }
}
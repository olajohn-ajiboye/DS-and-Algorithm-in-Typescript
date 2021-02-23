class TreeNode {
  constructor(
    public data: any,
    public left: TreeNode = null,
    public right: TreeNode = null
  ) {}
}

class BinarySearchTree {
  constructor(public root: TreeNode = null) {}

  inOrderTraverse(node: TreeNode) {
    // traverse the node in the order left => node=> right
    if (node !== null) {
      this.inOrderTraverse(node.left);
      console.log(node.data);
      this.inOrderTraverse(node.right);
    }
  }

  add(data: any, root: TreeNode = this.root) {
    // if !root make the new node the root
    // else recurse left and right until you find where it fits
    // recurs algorithm checks from left to right
    const newNode = new TreeNode(data);
    if (root) {
      if (data > root.left.data) {
        root.left.add;
      }
    } else {
      this.root = newNode;
    }
  }
}
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root !== null) {
    return root;
  }
  if (root.data === val) {
    const left = searchBST(root.left, val);
    const right = searchBST(root.right, val);
    return val < root.data ? left : right;
  }
}

function getSubtree(node: TreeNode) {
  if (!node) return null;
  return node;
}

function isBetween(value: number, low: number, high: number) {
  return value >= low && value <= high;
}
function rangeSumBSTs(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  let sum = 0;
  const traverse = (root: TreeNode | null) => {
    if (!root) return;
    if (isBetween(root.data, low, high)) {
      sum += root.data;
    }
    traverse(root.left);
    traverse(root.right);
  };
  traverse(root);
  return sum;
}

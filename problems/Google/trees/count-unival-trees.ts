const countUnivalTrees = (node: BSTNode): number => {
  let count = 0;

  const traverse = (root: BSTNode) => {
    if (root === null) return;
    // leaf node === no children
    else if (!root.left && !root.right) {
      return count++;
    } else if (root.left && root.right) {
      if (root.left.data === root.right.data && root.left.data === root.data) {
        count++;
      }
    } else if (root.left && !root.right) {
      if (root.left.data === root.data) {
        count++;
      }
    } else if (!root.left && root.right) {
      if (root.right.data === root.data) {
        count++;
      }
    }
    traverse(root.right);
    traverse(root.left);
  };

  traverse(node);
  return count;
};

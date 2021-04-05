class BSTNode<T = number> {
  constructor(
    public data: T,
    public left: BSTNode = null,
    public right: BSTNode = null
  ) {}
}

class BST<T = number> {
  root: BSTNode = null;

  insert(data: number, root: BSTNode = this.root): BSTNode {
    if (!root) {
      const newNode = new BSTNode(10);
      root = newNode;
    } else if (data > this.root.data) {
      root.right = this.insert(data, this.root.right);
    } else {
      root.left = this.insert(data, this.root.left);
    }

    return root;
  }
}

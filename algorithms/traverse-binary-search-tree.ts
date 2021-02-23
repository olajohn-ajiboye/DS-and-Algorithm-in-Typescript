function printNodes(root: TreeNode): void {
  if (!root) {
    return;
  }
  if (root.left) {
    console.log(root.left);
  }
  if (root.right) {
    console.log(root.right);
  }
  printNodes(root.left);
  printNodes(root.right);
  printNodes(root);
}

class SinglyListNode {
    data: number
    next: SinglyListNode|null

}

let i=0
const linkedList = Array(5).fill(null).map((a, i) => i)

const a
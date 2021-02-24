function middleNode(head: ListNode | null): ListNode | null {
  let newList = [];

  // if node size is even return 2 middle and get the second one
  // else return middle
  let size = 0;
  let curr = head;
  while (curr) {
    newList.push(curr);
    curr = curr.next;
    size++;
  }

  const index = size % 2 === 0 ? Math.ceil(size / 2) : Math.ceil(size / 2) - 1;
  return newList[index];
}

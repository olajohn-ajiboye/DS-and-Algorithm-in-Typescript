/** https: //leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/  */

function getDecimalValue(head: ListNode | null): number {
  let curr = head;
  let str = '';
  while (curr) {
    str += curr.val.toString();
    curr = curr.next;
  }
  return parseInt(str, 2);
}

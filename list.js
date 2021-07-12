
//Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
 }

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let u = new ListNode(0);
    let v = new ListNode(0);
    let m = u;
    let n = v;

    while (head) {
        console.log('1',head)
        if (head.val < x) {
            u.next = head;
            u = u.next;
            console.log('2', u)
        } else {
            v.next = head;
            v = v.next;
            console.log('3', v)
        }

        head = head.next;
    }
    v.next = null;
    u.next = n.next;
    console.log('4', m)
    return m.next;
};
partition ([1, 4, 3, 2, 5, 2],3)
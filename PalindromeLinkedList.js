/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let list = [];
   // console.log(head.next);
    while(head){
         //console.log(head);
         list.push(head.val);
         head=head.next;
        }
    for(let i=0; i<list.length;i++){
        //console.log(list.reverse()[i])
        if(list[i] !==list.reverse()[i]){
            return false
        }
    }
    return true 
    
};
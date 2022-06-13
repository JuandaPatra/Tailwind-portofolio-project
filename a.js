let list = [];

// console.log(list.length);

let list1 =[]
let list2 =[] 
// var mergeTwoLists = function(list1, list2) {
//     let result = []
//     if(list1.length===0 && list2.length === 0){
//         return result;
//     }
//     else if(list1.length !==0 && list2.length===0){
//         for(let i =0; i<list1.length;i++){
//             result.push(list1[i])
//         }
//         return result;
//     }
//     else if(list1.length ===0 && list2.length!==0){
//         for(let i =0; i<list2.length;i++){
//             result.push(list2[i])
//         }
//         return result;
//     }else if(list1.length !==0 && list2.length !==0 ){
//         for(let i=0;i<list1.length;i++){
//             // console.log(list1[i])
//             for(let j=0;j<list2.length;j++){
//                 // console.log(list2[j])
//                 if(list2[j] <= list1[i]){
//                     result.push(list2[j])
//                     // console.log(list2[j])
//                 }
//             }
//             // result.push(list1[i])
//         }
//         return result;
//     }
// };

// console.log(mergeTwoLists(list1,list2))

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let result = []
    if(list1.length===0 && list2.length === 0){
        return result;
    }
};

console.log(mergeTwoLists(list1,list2))
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    //nums=nums;

    
        k %= nums.length;
        console.log(k);
        if(k>0){
        console.log(k)
        const newArr1 = nums.slice(-k);
        //console.log(newArr1)
    
        const newArr2 = nums.slice(0,nums.length-k);
        const newfinal = newArr1.concat(newArr2);
        nums.splice(0);
        nums.push(...newfinal);
        //console.log(nums)
            
        }
        
    
 
    
};


/*var rotate = function(nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
     
    let reverse = function(i, j){
     while(i < j){
         let temp = nums[i]
         nums[i] = nums[j]
         nums[j] = temp
         i++
         j--
     }
    } // suppose  ----->---> 
     reverse(0, nums.length-1); // reverse   <--<------
      reverse(0, k-1) // reverse first part ---><----
    reverse(k, nums.length-1)// reverse second part --->----->
     
 };
 */
let nums= [1,2,3,4,5,6,7,8];
console.log(rotate(nums, 8));
console.log(nums)
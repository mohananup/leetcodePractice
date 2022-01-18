/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   
    const index = nums.indexOf(target);
    let left = 0;
    let right = nums.length-1;
    console.log();
    
    if(index>=0){
        return index;
    }
    console.log(typeof target);
    if(target > nums[right]){
        console.log(nums[right]);
        return right+1;
    }
    while(left <= right){
        if(target < nums[left]){
            return left;
        }
       console.log(left);
       
        let mid = parseInt((left+right)/2);
       
        if(nums[mid-1] < target < nums[mid]){
            console.log("entered")
            console.log("mid=", nums[mid-1])
            return mid;
        } else {
            right = mid;
        }
       
   }
   
   
   
   
   
};

console.log(searchInsert([1,2,3,5,6,7,8,10,19,18], 4));
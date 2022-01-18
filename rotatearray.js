/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

    const newArr1 = nums.slice(-k);
    const newArr2 = nums.slice(0,nums.length-k);
    return rotatArr = newArr1.concat(newArr2);
    
};
console.log(rotate([-1,-100,3,99], 2));
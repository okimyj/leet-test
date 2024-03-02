/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k > nums.length)
        k = k%nums.length;
    console.log(nums.slice(-k))
    console.log(nums.slice(0, nums.length-k));
    const newArr = [...nums.slice(-k), ...nums.slice(0, nums.length-k)]
    console.log("newArr : " , newArr);
    for(let i=0; i<nums.length; ++i){
        nums[i] = newArr[i];
    }    

    
    
};
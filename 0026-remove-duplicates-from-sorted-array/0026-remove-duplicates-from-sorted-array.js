/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const hasNums = new Set();
    for(let i =0; i<nums.length; ++i){
        if(hasNums.has(nums[i])){
            nums.splice(i, 1);
            --i;
        }
        else{
            hasNums.add(nums[i])
        }
    }
};
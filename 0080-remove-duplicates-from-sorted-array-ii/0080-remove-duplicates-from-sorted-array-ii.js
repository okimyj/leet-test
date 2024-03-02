/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const hasNumMap = new Map();
    for(let i =0; i<nums.length; ++i){
        if(hasNumMap.has(nums[i]) && hasNumMap.get(nums[i]) >=2){
            nums.splice(i, 1);
            --i;
        }else{
            hasNumMap.set(nums[i], (hasNumMap.get(nums[i])||0) + 1)
        }
    }
};
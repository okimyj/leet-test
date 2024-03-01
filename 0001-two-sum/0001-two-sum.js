/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const needNumbers = new Map();
    for(let i=0; i<nums.length; ++i){
        if(needNumbers.has(nums[i]))
            return([needNumbers.get(nums[i]), i]);
        const diff = target - nums[i];
        if(!needNumbers.get(diff))
            needNumbers.set(diff, i);
    }
    
};
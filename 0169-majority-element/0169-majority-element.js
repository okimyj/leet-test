/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const numCountMap = new Map();
    for(let i =0; i<nums.length; ++i){
        numCountMap.set(nums[i], (numCountMap.get(nums[i]) || 0 )+1);
    }
    return [...numCountMap.entries()].reduce((bigger, el)=>bigger[1] > el[1] ? bigger : el)[0]
};
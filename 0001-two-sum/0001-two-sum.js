/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numberMap = new Map();
  for(let i=0; i<nums.length; ++i){
    const needNumber = target - nums[i];
    if(numberMap.has(needNumber)){
      return [numberMap.get(needNumber), i];
    }
    numberMap.set(nums[i], i);
  }
};
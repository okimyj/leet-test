/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let canJumpNum = nums[0];
    for(let i=1; i<nums.length; ++i){
        console.log("canJumpNum : ", canJumpNum);
        if(canJumpNum === 0)
            return false;
        
        canJumpNum = Math.max(--canJumpNum, nums[i]);
    }
    return true;
};
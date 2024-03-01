/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let maxSequence = 0;
  
    numsSet.forEach((el)=>{
      let sequence = 1;
      if(!numsSet.has(el-1)){
        while(numsSet.has(el+sequence))
          ++sequence;  
        maxSequence = Math.max(maxSequence, sequence);
      }    
    });
    
    return maxSequence;
};
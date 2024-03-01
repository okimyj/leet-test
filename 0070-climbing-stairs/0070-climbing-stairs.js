/**
 * @param {number} n
 * @return {number}
 */
const memo = {}
var climbStairs = function(n) {
    if(n === 1)
        return 1;
    if(n === 2)
        return 2;
    if(!memo[n])
        memo[n] = climbStairs(n-1) + climbStairs(n-2)
    return memo[n];
};
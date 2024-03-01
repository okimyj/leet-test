/**
 * @param {number} n
 * @return {number}
 */
/*
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
*/
const memo = {1:1, 2:2}
var climbStairs = function(n){
    for(let i=3; i<=n; ++i){
        memo[i] = memo[i-1]+memo[i-2];
    }
    return memo[n];
}
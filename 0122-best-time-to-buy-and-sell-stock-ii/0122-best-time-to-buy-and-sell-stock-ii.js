/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0;
    let right = 1;
    let profitAcc = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            profitAcc += prices[right] - prices[left];
        }
        left = right;
        ++right;
        
    }
    return profitAcc;
};
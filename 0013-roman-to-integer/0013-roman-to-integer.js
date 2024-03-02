/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolValueMap = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    let sum = 0;
    let prev = 0;
    for(let i =0; i<s.length; ++i){
        let cur = symbolValueMap[s[i]];
        if(cur > prev){
            sum -= prev;
            sum += cur-prev;
        }
        else
            sum += cur;
        prev = cur;
    }
    return sum;
};
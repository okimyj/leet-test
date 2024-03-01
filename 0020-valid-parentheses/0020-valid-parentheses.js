/**
 * @param {string} s
 * @return {boolean}
 */
const isMatch = function(open, close){
  return (open === "(" && close === ")") || (open === "[" && close === "]") || (open === "{" && close === "}")
}
var isValid = function(s) {
    const opens = "({["
    const stack = []
    for(let i=0; i<s.length; ++i){    // O(n)
      if(opens.includes(s[i]))
        stack.push(s[i]);   // O(1)
      else{
        if(stack.length <= 0 || !isMatch(stack.pop(), s[i])){   // O(1)
          return false
        }
      }
    }
    return stack.length <= 0;
};
// 시간 복잡도 : O(n)
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
    let check = true;
    for(let i=0; i<s.length; ++i){
      if(opens.includes(s[i]))
        stack.push(s[i]);
      else{
        if(stack.length <= 0 || !isMatch(stack.pop(), s[i])){
          check = false;
          break;
        }
      }
    }
    return check && stack.length <= 0;
};
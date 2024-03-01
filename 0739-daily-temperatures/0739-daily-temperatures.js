/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
  const output = Array(temperatures.length).fill(0);
  const stack = [];
  for(let i =0; i<temperatures.length; ++i){
    while(stack.length > 0 && stack[stack.length-1].value < temperatures[i]){
      const data = stack.pop();
      output[data.day] = i - data.day;  
    }
    stack.push({day:i, value:temperatures[i]})
  }
  return output;
};


// 시간 복잡도 O(n)
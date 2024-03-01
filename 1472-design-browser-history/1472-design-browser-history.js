/**
 * @param {string} homepage
 */

var BrowserHistory = function(homepage) {
  this.current = {url:homepage, next:null, prev:null};
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  const newVisit = {url:url, next:null, prev:this.current}
  this.current.next = newVisit    
  this.current = newVisit
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for(let i=0; i<steps; ++i){
      if(this.current.prev){
        this.current = this.current.prev
      }
      else
        break;
    }
    return this.current.url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for(let i=0; i<steps; ++i){
      if(this.current.next){
        this.current = this.current.next
      }
      else
        break;
    }
  return this.current.url
};


/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
// const rl = require("readline").createInterface({input:stdin});
// rl.on("line", (line)=>{
  
// });
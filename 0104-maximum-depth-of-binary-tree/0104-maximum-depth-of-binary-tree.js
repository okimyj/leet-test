/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root)
    return 0;
  let max_depth = 0;
  const q = [[root, 1]];
  while(q.length > 0){
    const [curNode, level] = q.shift();
    max_depth =level;
    if(curNode.left)
      q.push([curNode.left, level+1])
    if(curNode.right)
      q.push([curNode.right, level+1])
  }
  return max_depth;

};
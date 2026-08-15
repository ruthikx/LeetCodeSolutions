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
var longestZigZag = function(root) {
    let ans =0;
    function dfs(node){
        if(!node){
            return [-1,-1];
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        let goLeft = left[1]+1;
        let goRight = right[0]+1;

        ans= Math.max(ans,goLeft,goRight);

        return [goLeft,goRight]
    }
    dfs(root)
    return ans;

};
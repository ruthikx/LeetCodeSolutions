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
var goodNodes = function(root) {
    function dfs(node,maxVal){
        if(node === null){
            return 0;
        }

        let count = 0;

        if(node.val >= maxVal){
            count = 1;
        }

        maxVal = Math.max(maxVal,node.val)

        count += dfs(node.left,maxVal);
        count += dfs(node.right,maxVal);

        return count
    }
    return dfs(root,root.val)
};
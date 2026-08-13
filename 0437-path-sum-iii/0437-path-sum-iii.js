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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    function dfs(node,path){
        if(node === null){
            return;
        }
        path.push(node.val);
        let sum = 0;
        for(let i=path.length-1;i>=0;i--){
            sum+=path[i];
            if(sum===targetSum){
                count++
            }
        }

        dfs(node.left,path);
        dfs(node.right,path);

        path.pop()
    }
    dfs(root,[])
    return count;
};
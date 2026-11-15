/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0;
    let r = m*n -1;

    while(l<=r){
        let mid = Math.floor((l+r)/2)
        let row = Math.floor(mid/n);
        let column = mid%n
        let midValue = matrix[row][column]

        if(midValue===target){
            return true
        }else if(midValue < target){
            l = mid + 1
        }else{
            r = mid - 1
        }
    }

    return false
};
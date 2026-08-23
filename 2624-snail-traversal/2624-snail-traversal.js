/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    const nums = this;
    if(rowsCount*colsCount !== nums.length){
        return [];
    }
    const result = Array.from({length:rowsCount},()=> Array(colsCount))
    let index = 0
    for(let col = 0;col <colsCount ;col++){
        if(col % 2 === 0){
            for(let row = 0; row < rowsCount; row++){
                result[row][col]=nums[index++]
            }
        }else{
            for(let row = rowsCount-1; row>=0; row-- ){
                result[row][col]=nums[index++]
            }
        }
    }
    return result;
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let result = [];
    function flatten(array,depth){
        for(let num of array){
            if(typeof num === "object" && depth<n){
                flatten(num,depth+1)
            }else{
                result.push(num)
            }
        }
    }
    flatten(arr,0)
    return result
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
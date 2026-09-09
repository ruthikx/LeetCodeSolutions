/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map();

    for(let obj of arr1){
        map.set(obj.id,obj)
    }

    for(let obj of arr2){
        if(map.has(obj.id)){
            map.set(obj.id,{
                ...map.get(obj.id),...obj
            })
        }else{
            map.set(obj.id,obj)
        }
    }
    return Array.from(map.values()).sort((a,b)=>a.id-b.id)
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
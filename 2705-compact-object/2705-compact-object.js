/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if(Array.isArray(obj)){
        let result=[];
        for(let val of obj){
            if(val){
                if(typeof val === "object"){
                    result.push(compactObject(val))
                }else{
                    result.push(val)
                }
            }
        }
        return result
    }
    let result={};
    for(let key in obj){
        let val = obj[key];
        if(val){
            if(typeof val === "object"){
                result[key]=compactObject(val)
            }else{
                result[key]=val;
            }
        }
    }
    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
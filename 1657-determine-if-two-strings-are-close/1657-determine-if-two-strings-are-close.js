/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){
        return false
    }

    let freq1= new Map();
    let freq2 = new Map();

    for (let char of word1){
        freq1.set(char,(freq1.get(char)||0)+1)
    }

    for(let char of word2){
        freq2.set(char,(freq2.get(char)||0)+1)
    }

    for(let i of freq1.keys()){
        if(!freq2.has(i)){
            return false
        }
    }

    value1 = [...freq1.values()].sort((a,b)=>a-b);
    value2 = [...freq2.values()].sort((a,b)=>a-b);

    for(let i=0;i<value1.length;i++){
        if(value1[i]!==value2[i]){
            return false
        }
    }
    return true;
};
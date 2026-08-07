/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = new Map();

    for(let num of arr){
        freq.set(num,(freq.get(num)||0)+1)
    }

    const unique = new Set(freq.values())

    return unique.size === freq.size;
};
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0;
    let write = 0;

    while(read < chars.length){
        currentChar = chars[read];
        count = 0;

        while(read < chars.length && chars[read]==currentChar){
            read++;
            count++;
        }

        chars[write]=currentChar;
        write++;

        if(count > 1){
            CountString = count.toString();
            for(let digit of CountString){
                chars[write]=digit;
                write++;
            }
        }
    }

    return write

};
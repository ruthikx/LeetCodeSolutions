/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];
    let strStack = [];
    let currentNum = 0;
    let currentStr ="";
    for(let char of s){
        if(char >= '0' && char <='9'){
            currentNum = currentNum*10+Number(char);
        }else if(char==="["){
            numStack.push(currentNum);
            strStack.push(currentStr);

            currentNum = 0;
            currentStr ="";
        }else if(char==="]"){
            let repeat = numStack.pop();
            let prevStr = strStack.pop();

            currentStr = prevStr+currentStr.repeat(repeat);
        }else{
            currentStr+=char;
        }
        
    }
    return currentStr

};
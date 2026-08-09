/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let n = senate.length;
    let rediant = [];
    let dire = [];
    for(let i=0;i<n;i++){
        if(senate[i]==='R'){
            rediant.push(i)
        }else{
            dire.push(i)
        }
    }
    while(rediant.length>0 && dire.length>0){
        let r = rediant.shift();
        let d = dire.shift();
        if(r<d){
            rediant.push(r+n)
        }else{
            dire.push(d+n)
        }
    }
    return rediant.length > 0 ? "Radiant" : "Dire"
};
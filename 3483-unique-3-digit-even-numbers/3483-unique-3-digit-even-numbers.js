/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let count=0;
    for(let num=100;num<=998;num+=2){
        let a = Math.floor(num/100);
        let b = Math.floor(num/10)%10;
        let c = num%10;

        let freq=Array(10).fill(0);

        for(let digit of digits){
            freq[digit]++;
        }

        if(freq[a]>0 && freq[b]>0 && freq[c]>0){
            freq[a]--;
            freq[b]--;
            freq[c]--;
            if(freq[a]>=0 && freq[b]>=0 && freq[c]>=0){
                count++
            }
        }
    }
    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna
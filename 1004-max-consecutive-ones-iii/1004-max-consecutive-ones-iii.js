/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeroCount = 0;
    let maxWindow = 0;
    let left =0;
    for(let right=0;right<nums.length;right++){
        if(nums[right]=== 0){
            zeroCount++;
        }

        while(zeroCount>k){
            if(nums[left]===0){
                zeroCount--;
            }
            left++;
        }
        maxWindow = Math.max(maxWindow,right-left+1)
    }
    return maxWindow;
};
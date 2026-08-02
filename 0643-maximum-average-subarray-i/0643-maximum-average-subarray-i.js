/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let windowSum = 0;
    
    for(let i=0; i<k;i++){
        windowSum += nums[i];
    }

    maxSum = windowSum;

    for(i=k;i<nums.length;i++){
        windowSum = windowSum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum,windowSum);
    }

    return maxSum/k

};
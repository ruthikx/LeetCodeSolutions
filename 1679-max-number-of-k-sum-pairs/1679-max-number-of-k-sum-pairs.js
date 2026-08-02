/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b);

    left=0;
    right=nums.length-1;
    count=0;

    while(left<right){
        sum=nums[left]+nums[right];

        if(sum===k){
            left++;
            right--;
            count++;
        }else if(sum<k){
            left++;
        }else{
            right--;
        }
    }
    return count;
    
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let maxL = nums.reduce((sum,num)=>sum+num,0)

    let leftVal = 0;
    for(let i=0;i<nums.length;i++){
        let rightVal = maxL - leftVal - nums[i];

        if(rightVal===leftVal){
            return i;
        }

        leftVal+=nums[i]
    }
    return -1;
};
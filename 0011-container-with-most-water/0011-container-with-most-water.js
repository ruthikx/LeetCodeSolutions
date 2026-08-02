/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    left = 0;
    right = height.length -1;
    max=0;

    while(left < right){
        width = right - left;
        area=Math.min(height[left],height[right])* width;

        max = Math.max(max, area);
        if(height[left]<height[right]){
            left++;
        }else{
            right--;
        }
    }
    return max;
};
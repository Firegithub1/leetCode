/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-18 01:30:06
 * @Description:
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = nums[0];
    for (const num of nums) {
        if (sum > 0) {
            sum += num;
        } else {
            sum = num;
        }
        ans = Math.max(sum, ans);
    }
    return ans;
};


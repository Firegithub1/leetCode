/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-02 10:51:16
 * @Description:
 *
 */
var twoSum = function(nums, target) {
    // 暴力遍历
    // for(let i = 0, len = nums.length; i<len-1; i++) {
    //     for(let j = i+1; j < len; j++) {
    //         if(nums[i] + nums[j] == target){
    //             return [i, j]
    //         }
    //     }
    // }
    // return null;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        } else {
            map.set(nums[i], i);
        }
    }
    return null;
}
let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
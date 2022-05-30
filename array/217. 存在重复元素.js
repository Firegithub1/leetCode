/*
 * @Author: YiFreerFiY
 * @Date: 2022-05-18 01:22:27
 * @Description:
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let set = new Set();
    for (const i of nums) {
        if (set.has(i)) {
            return true;
        }
        set.add(i);
    }
    return false;
};
var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
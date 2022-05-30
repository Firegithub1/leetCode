/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-28 20:39:42
 * @Description:
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var set = new Set();
    for (let i of nums) {
        if (set.has(i))
            return true;

        set.add(i)
    }
    return false;
};
var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(containsDuplicate(nums));
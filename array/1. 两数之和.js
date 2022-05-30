/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (nums, target) {
//     let map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         map.set(i, nums[i]);

//         if (map.has(target - nums[i])) {
//             return i;
//         }
//     }
// };

var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const v = nums[i];
        const diff = target - v;
        if (map.has(diff)) {
            return [map.get(diff),i]
        }
        map.set(v,i);
    }
};
let nums = [2, 7, 11, 15],
    target = 9;

console.log(twoSum(nums, target));

/*
 * @Author: zhangli
 * @Date: 2022-11-09 15:52:41
 * @LastEditTime: 2022-12-02 14:47:37
 */
var containsDuplicate = function (nums) {
  let arr = Array.from(new Set(nums));
  console.log(arr.length);
  console.log(nums.length);
  if (arr.length !== nums.length) {
    return true;
  }
  return false;
};

let nums = [1, 2, 3, 1];

console.log(containsDuplicate(nums));
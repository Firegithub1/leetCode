/*
 * @Author: zhangli
 * @Date: 2022-12-02 15:24:45
 * @LastEditTime: 2022-12-02 16:05:53
 */
function log(...x) {
  console.log(...x);
}
/**
 * 1.从数组末尾开始计算
 * 2.跳出条件为大于9
 * @param {} digits
 */

var plusOne = function (digits) {
  let last = digits.length - 1;
  console.log(last);
  nineAddOne(last, digits);
  log(last);
  return digits;
};

function nineAddOne(last, array) {
  if (last !== 0 && array[last] === 9) {
    array[last] = 0;
    nineAddOne(last - 1, array);
  } else if (last === 0 && array[last] === 9) {
    array[last] = 0;
    array.unshift(1);
  } else {
    array[last] += 1;
    // return array
  }
}
// let x = Array(6).fill(3);
let x = [9, 8, 9, 9, 9, 9];

log(x);
x = plusOne(x);
log(x);

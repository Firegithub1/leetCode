/*
 * @Author: zhangli
 * @Date: 2022-12-02 15:39:23
 * @LastEditTime: 2023-09-12 15:39:16
 */
function log(...x) {
  let arr = [...x]
  arr.forEach(item => {
    console.log("item", item);
  });
}

log(123, "qwer", "13548")

/*
 * @Author: zhangli
 * @Date: 2022-12-02 11:04:56
 * @LastEditTime: 2022-12-02 15:38:59
 */
function log(...x) {
  console.log(...x);
}
// 1.取第一个字符串首字符（tmp)
// 2.比对所有字符串首字符，此时到达数组末尾(t长度+1)
//    未到达数组末尾，不相等；
//      如果t长度为0，返回0
//    到达末尾，相等；
//      如果j+1;
// 3.再次比对，比对次数由第一个字符串长度&&有字符串长度小于t长度
// 4.返回tmp
function longestPrefix(arr) {
  let j = 0; //字符串长度
  let tmpLength = arr[0].length;

  if (!tmpLength) return "";
  if (arr.length === 1) return arr[0];

  let tmp = arr[0].slice(0, j + 1);

  for (let i = 1; i <= tmpLength; i++) {
    for (let item of arr) {
      let pre = item.slice(0, i);
      log("i, pre,tmp----", i, pre, tmp);
      if (pre !== tmp) {
        log("这里" + pre + "不等于" + tmp + ",最大长度j是" + j);
        return item.slice(0, j).length ? item.slice(0, j) : "";
      }
    }
    j++;
    log("j,tmp-----", j, tmp);
    tmp = arr[0].slice(0, j + 1);
    log(tmp);
  }
  return tmp;
}

let arr = ["flower", "flower", "flower", "flower"];
log(longestPrefix(arr));

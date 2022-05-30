// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 - 1 。

// 1.放入数组中 大小为26
// 2.遍历一边是否存在，默认为null
// 首次出现，存储字符位置
// 再次出现，数组位置为-1
// 3.过滤为只出现一次的字符
// 4.提取首个字符

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let list = new Array(26).fill(null);
    for (let i = 0; i < s.length; i++) {
        let sChar = s.charAt(i);
        let idx = sChar.charCodeAt() - 97;
        if(list[idx] === null) {
            list[idx] = i;
        } else {
            list[idx] = -1;
        }
    }
    list = list.filter(item => item != null && item != -1);
    if (list.length) {
        return Math.min.apply(Math, list);
    } else {
        return -1;
    }
}

let s = "leetcode";

console.log(firstUniqChar(s));
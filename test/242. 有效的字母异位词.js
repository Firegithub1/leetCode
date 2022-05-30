// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

//Note:
// 1.判断s, t长度 不同则 false
// 2.转换成数组，进行排序，不同则false
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    return s.length === t.length && [...s].sort().join('') === [...t].sort().join("");
};

let s = "anagram", t = "nagaram";
console.log(isAnagram(s, t));

// 时间复杂度O（nlogn)
//空间复杂度（排序logn)忽略字符串空间O(n)
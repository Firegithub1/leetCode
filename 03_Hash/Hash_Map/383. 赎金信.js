// 383. 赎金信
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

// Note:
// 1.magazine小于ransomNote return false
// 2.统计[a - z]字母数量
// 且magazine中数量大于ransomNote
// 如果 ransomNote 多则 return false

var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }
    const word = new Array(26).fill(0);
    for (const i of magazine) {
        word[i.charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (const j of ransomNote) {
        word[j.charCodeAt() - 'a'.charCodeAt()]--;
        if (word[j.charCodeAt() - 'a'.charCodeAt()] < 0) {
            return false;
        }
    }
    return true;
}

// let ransomNote = "aa", magazine = "aab";
// 输出：true
// console.log(canConstruct(ransomNote, magazine));

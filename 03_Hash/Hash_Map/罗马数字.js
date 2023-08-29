/*
 * @Author: YiFreerFiY
 * @Date: 2022-04-27 16:01:19
 * @Description:
 *
 */
var romanToInt = function(s) {
    const map = new Map();
    map.set('I', 1);
    map.set('V', 5)
        .set('X', 10)
        .set('L', 50)
        .set('C', 100)
        .set('D', 500)
        .set('M', 1000);
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        const value = map.get(s[i]);
        if (i < n - 1 && value < map.get(s[i + 1])) {
            ans -= value;
        } else {
            ans += value;
        }
    }
    return ans;
}

let roman = "III";
let value = romanToInt(roman);
console.log(value);
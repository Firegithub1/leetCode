var str = '123456789';
console.log(str.substring(5,3));
console.log(str.substring(3,5));
console.log(str.substr(5, 1));
// 相同点：如果只是写一个参数，两者的作用都一样：都是是截取字符串从当前下标以后直到字符串最后的字符串片段。
// 不同点：第二个参数
// substr（startIndex, lenth）： 第二个参数是截取字符串的长度（从起始点截取某个长度的字符串）；
// substring（startIndex, endIndex）： 第二个参数是截取字符串最终的下标 （截取2个位置之间的字符串,‘含头不含尾’）。
console.log("**********");

var str2 = "http://www.xxxx.com?imgsrc=1.jpg"
console.log(str2.substr(-5).substring(0,1));

console.log("**********");
// 通过下标找到对应的字符
console.log(str2[2]);

console.log("**********");
// 通过字符找到对应的下标
let pos1 = str2.indexOf("i")
console.log(pos1 + 1);
console.log("**********");
// 去掉所有引号
let reg = /'"',"g"/;
console.log(reg);
str = str.replace(reg, "");
console.log(str);
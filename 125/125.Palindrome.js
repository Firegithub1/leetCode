var isPalindrome = function (s) {
  console.log("************ssss*******");
  let aa = s.toLowerCase();

  let bb = aa.match(/[a-z0-9]/g);
  console.log(bb);
  if (!bb) {
    return true;
  }
  let bbb = bb.join("");
  console.log(bb); //array
  console.log("bbb", bbb); //string
  let cc = bb.reverse().join("");
  console.log("cc", cc);
  return cc === bbb;
};

let aa = "a man, a plan, a canal: panama";
let bb = "race a car";
// let cc = ".";
let cc = ".,";
// console.log(isPalindrome(aa));
// console.log(isPalindrome(bb));
console.log(isPalindrome(cc));

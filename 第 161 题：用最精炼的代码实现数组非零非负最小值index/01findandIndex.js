const arr = [10, 21, 0, -7, 35, 7, 9, 23, 18];
let tmp = 0;
let res = arr.find((x, xIndex) => {
  if (x == 21) console.log(x, xIndex);
  tmp = xIndex;
  return xIndex;
});

console.log("miniNum:", res, tmp);

// let resIndex = arr.findIndex((x) => x === 21);
// console.log("miniNumIndex:", resIndex);

const arr = [10, 21, 0, -7, 35, 7, 9, 23, 18];

function findMinimumIndex(arr) {
  return arr.findIndex(
    (item) => item === arr.filter((item) => item > 0).sort((a, b) => a - b)[0]
  );
}
console.log(findMinimumIndex(arr));

var containsDuplicate = function (nums) {
  let arr = new Set(nums);
  arr = Array.from(arr);
  console.log("arr", arr);
  console.log("nums", nums);

  if (arr.toString() == nums.toString()) {
    return false;
  }

  return true;
};

let nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));

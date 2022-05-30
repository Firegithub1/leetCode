/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  let p = m + n - 1;
  m--;
  n--;
  while (m >= 0 && (n >= 0)) {
    if (nums1[m] > nums2[n]) {
      nums1[p--] = nums1[m--];
    } else {
      nums1[p--] = nums2[n--];
    }
  }
  // 当m=0时，m--：-1
  while (n >= 0) nums1[p--] = nums2[n--];

  return nums1;
};

let nums1 = [0], m = 0, nums2 = [1], n = 1;
console.log(merge(nums1, m, nums2, n));
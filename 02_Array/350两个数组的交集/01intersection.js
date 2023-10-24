var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => { a - b; });
    console.log(nums1);
    nums2.sort((a, b) => a - b);
    let f = 0;
    let s = 0;
    let results = [];

    while (f < nums1.length && s < nums2.length) {
        if (nums1[f] == nums2[s]) {
            results.push(nums1[f]);
            f++;
            s++;
        } else {
            nums1[f] > nums2[s] ? s++ : f++;
        }
    }
    return results;
}

let nums1 = [1, 2, 2, 1, 12, 21],
    nums2 = [2, 2, 12, 21,];
console.log(intersect(nums1, nums2));


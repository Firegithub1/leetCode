// Set
var intersection = function (nums1, nums2) {
    let set = new Set(nums1)
    let result = new Set()
    for (const item of nums2) {
        for (let i = 0; i < nums2.length; i++) {
            set.has(nums2[i]) && result.add(nums2[i])
        }
        return Array.from(result)
    }
}

let nums1 = [1, 2, 2, 1, 12, 21],
    nums2 = [2, 2, 12, 21,];
console.log(intersection(nums1, nums2));

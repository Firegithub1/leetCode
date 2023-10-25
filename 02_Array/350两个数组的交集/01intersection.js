var intersect = function (nums1, nums2) {
    let m = nums1.length > nums2.length ? nums1 : nums2
    let n = nums1.length > nums2.length ? nums2 : nums1
    let map = new Map()
    m.forEach(item => {
        if (map.has(item)) {
            let i = map.get(item)
            map.set(item, ++i)
        } else {
            map.set(item, 1)
        }
    });
    let nums = []
    n.forEach(item => {
        let i = map.get(item)
        if (i--) {
            map.set(item, i)
            nums.push(item)
        }
    })
    return nums
}

let nums1 = [1, 2, 2, 1, 12, 21],
    nums2 = [2, 2, 12, 21, 1, 13];
console.log(intersect(nums1, nums2));


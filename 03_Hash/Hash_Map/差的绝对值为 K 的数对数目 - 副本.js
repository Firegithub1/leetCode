nums = [3, 2, 1, 5, 4], k = 2;
var countKDifference = (nums, k) => {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			console.log(`i:${nums[i]} j:${nums[j]}`);
			let temp = Math.abs(nums[i] - nums[j]);
			if (temp == k) {
				console.log(`**************i:${nums[i]} j:${nums[j]}`);
				count++;
			}
		}
	}
	return count;
}
console.log(countKDifference(nums, k))
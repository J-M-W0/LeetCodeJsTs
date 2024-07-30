// nums is an already sorted array.
function searchInsert(nums: number[], target: number): number {
    let i = nums.indexOf(target);
    if (i === -1) {
        // if target not in nums, firstly test if it's smaller than the smallest element in the array,
        // if so, return 0, the index where it should be inserted.
        if (nums[0] > target) {
            return 0;
        }
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] < target && nums[i] > target) {
                return i;
            }
        }
        // if target is bigger than the biggest number in array, 
        // insert it into the end.
        return nums.length;
    } else {
        // if target in nums, return its index.
        return i;
    }
};


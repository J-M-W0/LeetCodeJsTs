/* Leetcode 15: 3Sum
 *
 *
 * Objective: 
 *      Given an array nums of integers, find all unique triplets in the array which gives the sum of zero. 
 *      The solution set must not contain duplicate triplets.
 * Input:
 *      An array nums of integers.
 * Output:
 *      A list of arrays, where each array is a triplet [a, b, c] such that a + b + c = 0.
 *
 * 
 * Example:
 *      nums = [-1, 0, 1, 2, -1, -4]:
 *      After sorting, it becomes [-4, -1, -1, 0, 1, 2].
 *      The function finds the triplets [-1, -1, 2] and [-1, 0, 1] that sum up to zero.
 * */

export {};

// two-pointer approach.
const solution = (nums: number[]): number[][] => {
    const result: number[][] = [];

    // sorting the array is crucial for the two-pointer approach to work.
    nums.sort((a, b) => a - b);

    // last possible i value is nums.length - 3,
    // because at then there will be only one possible combo:
    //      [nums.length - 3, nums.length - 2, nums.length - 1]
    for (let i = 0; i <= nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            // Skip duplicate value.
            // The purpose of skipping duplicated elements in the array isn't to ignore valid solutions, 
            // but rather to avoid reporting the same solution multiple times.
            continue;
        }

        let leftIndex = i + 1;
        let rightIndex = nums.length - 1;
        while (leftIndex < rightIndex) {
            // check if the sum is equal to zero.
            const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
            if (sum < 0) {
                // if the sum is too small, increase the leftIndex.
                leftIndex++;
            } else if (sum > 0) {
                // if the sum is too big, decrease the rightIndex.
                rightIndex--;
            } else {
                // find the correct sum which is equal to zero.
                result.push([nums[i], nums[leftIndex], nums[rightIndex]]);
                // skip duplicate elements.
                while (leftIndex < rightIndex && nums[leftIndex] === nums[leftIndex + 1]) {
                    leftIndex++;
                }
                // skip duplicate elements.
                while (leftIndex < rightIndex && nums[rightIndex] === nums[rightIndex - 1]) {
                    rightIndex--;
                }
                // check the next possible combination.
                leftIndex++;
                rightIndex--;
            }
        }
    }

    return result;
};

// hash set lookup method;
// has higher time and space complexity than the one above.
const solution2 = (nums: number[]): number[][] => {
    let result = new Set<string>();

    // keep track of numbers already processed.
    let seen   = new Set<number>();

    for (let i = 0; i <= nums.length - 3; i++) {
        if (seen.has(nums[i])) {
            // avoid checking the same number twice.
            continue;
        }

        seen.add(nums[i]);
        
        let complements = new Set<number>();
        for (let j = i + 1; j < nums.length; j++) {
            if (complements.has(-nums[i] - nums[j])) {
                const triplet = [nums[i], nums[j], -nums[i]-nums[j]].sort((a, b) => a - b);
                result.add(triplet.join(','));
            }
            complements.add(nums[j]);
        }
    }

    return Array.from(result, item => item.split(',').map(Number));
};

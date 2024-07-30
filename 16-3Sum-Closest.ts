/* Leetcode 16: 3Sum Closest
 *
 *
 * Objective: 
 *      Given an array nums of integers and an integer target, find three integers in nums such that the sum is closest to target. 
 *      Return the sum of the three integers. 
 *      You may assume that each input would have exactly one solution.
 * Input:
 *      An array of integers, nums.
 *      An integer, target.
 * Output:
 *      An integer representing the sum of the three integers in nums closest to target.
 *
 *
 * Example:
 *      nums = [-1, 2, 1, -4] and target = 1:
 *      The function would find that the triplet [-1, 2, 1] has the sum 2, which is the closest to the target 1.
 * */

export {};
const solution = (target: number, nums:number[]): number => {
    let closestSum = Infinity;
    nums.sort((a, b) => a - b);

    for (let i = 0; i <= nums.length - 3; i++) {
        let leftIndex = i + 1;
        let rightIndex = nums.length - 1;

        while (leftIndex < rightIndex) {
            const sum = nums[i] + nums[leftIndex] + nums[rightIndex];
            
            if (sum === target) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            (sum < target) ? leftIndex++ : rightIndex--;
        }
    }

    return closestSum;
};

// basically the same thought as the first solution.
const solution2 = (target: number, nums: number[]): number => {
    let sum: number  = 0;
    let diff: number = Infinity;

    // very important step in the two-pointer approach.
    nums.some((a, b) => a - b);

    // l - left
    // m - middle
    // r - right
    for (let l = 0; l <= nums.length - 3; l++) {
        if (l > 0 && nums[l] === nums[l - 1]) {
            // skip through duplicate elements;
            // which avoids the same result and saves up time.
        }

        // essential of two-pointer approach.
        let m = l + 1;
        let r = nums.length - 1;
        while (m < r) {
            const tempSum = nums[l] + nums[m] + nums[r];
            if (tempSum === target) {
                return tempSum;
            }

            const tempDiff = tempSum - target;
            if (Math.abs(tempDiff) < diff) {
                sum = tempSum;
                diff = Math.abs(tempSum);
            }

            if (tempDiff < 0) {
                // if tempSum < target,
                // increase the 'm' index.
                while (nums[m + 1] === nums[m]) {
                    // skip through repeated elments;
                    // save up time.
                    m++;
                }
                m++;
            } else {
                // if tempSum > target,
                // decrease the 'r' index.
                while (nums[r - 1] === nums[r]) {
                    // skip through repeated elments;
                    // save up time.
                    r--;
                }
                r--;
            }
        }
    }

    return sum;
};

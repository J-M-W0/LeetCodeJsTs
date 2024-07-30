/* Letter 18: 4Sum
 * 
 *
 * Objective: 
 *      Given an array nums of integers and an integer target, 
 *      find all unique quadruplets in the array which give the sum of target.
 * Input:
 *      An array nums of integers.
 *      An integer target.
 * Output:
 *      A list of all unique quadruplets [a, b, c, d] in the array such that a + b + c + d = target.
 * 
 *
 * Example:
 *      nums = [1, 0, -1, 0, -2, 2] and target = 0:
 *      The function would find quadruplets like [-1, 0, 0, 1] and [-2, -1, 1, 2].
 * */

export {};

// not that efficient, but very intuitive.
function fourSum(nums: number[], target: number): number[][] {
    if (nums.length <= 3) {
        return [];
    }

    // the answer to be returned.
    let answer: number[][] = [];
    // sort the nums array in ascending order.
    nums.sort((a, b) => a - b);
    // set to check if repeated quadruplets.
    let set = new Set<string>();

    for (let a = 0; a <= nums.length - 4; a++) {
        // skips the duplicate elements,
        // in order to save up time,
        // because they give the same result.
        if (a > 0 && nums[a - 1] === nums[a]) {
            continue;
        }

        for (let b = a + 1; b <= nums.length - 3; b++) {
            let c = b + 1;
            let d = nums.length - 1;

            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum < target) {
                    while (nums[c + 1] === nums[c]) {
                        c++;
                    }
                    c++;
                } else if (sum > target) {
                    while (nums[d - 1] === nums[d]) {
                        d--;
                    }
                    d--;
                } else {
                    // avoid diplicated quadruplets
                    const key = nums[a] + ',' + nums[b] + ',' + nums[c] + ',' + nums[d];
                    if (!set.has(key)) {
                        set.add(key);
                        answer.push([nums[a], nums[b], nums[c], nums[d]]);
                    }
                    while (nums[c + 1] === nums[c]) {
                        // skip duplicate elements.
                        c++;
                    }
                    while(nums[d - 1] === nums[d]) {
                        // skip duplicate elements.
                        d--;
                    }
                    c++;
                    d--;
                }
            }
        }
    }

    return answer;
};

// with inspiration from the implementation above, and much more efficient and faster,
function fourSum2(nums: number[], target: number): number[][] {
    if (nums.length <= 3) {
        return [];
    }

    // the answer to be returned.
    let answer: number[][] = [];
    // sort the nums array in ascending order.
    nums.sort((a, b) => a - b);
    // and voila! actually we don't need the set since every element is well-ordered,
    // we just need to avoid duplicate usage of elements of the same value.

    for (let a = 0; a <= nums.length - 4; a++) {
        // skips the duplicate elements,
        // in order to save up time,
        // because they give the same result.
        if (a > 0 && nums[a - 1] === nums[a]) {
            continue;
        }

        for (let b = a + 1; b <= nums.length - 3; b++) {
            // same reason, skip through the duplicate elements,
            // they produce the same result.
            if (b != a + 1 && nums[b - 1] === nums[b]) {
                continue;
            }

            // two-pointer approach.
            let c = b + 1;
            let d = nums.length - 1;
            while (c < d) {
                const sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum < target) {
                    while (nums[c + 1] === nums[c]) {
                        // skip duplicate elements.
                        c++;
                    }
                    c++;
                } else if (sum > target) {
                    while (nums[d - 1] === nums[d]) {
                        // skip duplicate elements.
                        d--;
                    }
                    d--;
                } else {
                    // sum === target
                    answer.push([nums[a], nums[b], nums[c], nums[d]]);

                    while (nums[c + 1] === nums[c]) {
                        // skip duplicate elements.
                        c++;
                    }
                    while (nums[d - 1] === nums[d]) {
                        // skip duplicate elements.
                        d--;
                    }
                    c++;
                    d--;
                }
            }
        }
    }

    return answer;
};

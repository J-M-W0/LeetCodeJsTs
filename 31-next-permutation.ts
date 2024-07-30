/**
 Do not return anything, modify nums in-place instead.
 */
// time O(n)
// space O(1)
function nextPermutation(nums: number[]): void {
    // next lexicographical permutation meaning here:
    //
    // let's say we have {1, 2, 3, 4},
    // this array will represent the number 1234,
    // then what's the next number that consists of these four digits and is larger than 1234?
    // the answer is clear => 1243;
    //
    // so we can observe the pattern here,
    // the next permutation here is the next nunber which is bigger than the current number,
    // and which is smaller than the next next number;
    //
    // once we've defined the question pattern then it's easy to find a solution,
    // so how to find the next permutation assuming that the array is not totally sorted in descending order,
    // of which situation that its next permutation is the array sorted in totally descending order;
    // so the way to find the next permutation is to 
    // firstly find the first number in this array that which is followed by a larger number than itself,
    // than after this 'first number' the 'next next number' should also be smaller than the 'next number'.
    // then swap them, voila, done!

    // length of the array.
    const n = nums.length;
    // pivot pointer, 'pivot - 1' points to the first number that nums[pivot - 1] < nums[pivot],
    // the first number who's smaller than it's next element, which is the element to be swapped.
    let pivot = n - 1;
    while (pivot >= 1 && nums[pivot - 1] >= nums[pivot]) {
        pivot--;
    }

    if (pivot === 0) {
        // if pivot === 0,
        // it means that the array is sorted in descending order,
        // because every element is >= the element after it,
        // thus in this special case we return the ascending ordered array.
        nums.sort((a, b) => a - b);
        return;
    }

    // i pointer, 'i' points to the element that will be swapped with which 'pivot - 1' points to.
    let i = n - 1;
    while (nums[i] <= nums[pivot - 1]) {
        i--;
    }
    [nums[i], nums[pivot - 1]] = [nums[pivot - 1], nums[i]];

    // reverse, because after the swap above,
    // all the numbers to the right of 'pivot -1' are still in descending order (
    //      since we initially found the longest non-increasing sequence from the end of the array.
    // );
    // however, for the next permutation, you would want these numbers to be in the lowest possible order (
    //      which is here ascending order.
    // );
    let l = pivot;
    let r = n - 1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;
        r--;
    }

};

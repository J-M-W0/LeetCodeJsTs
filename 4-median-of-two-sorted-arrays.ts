/* Leetcode 4: Median of Two Sorted Arrays
 * */

export {};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let m = nums1.length;
    let n = nums2.length;

    const nums: number[] = Array(m + n);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            nums[k] = nums1[i];
            i++;
        } else {
            nums[k] = nums2[j];
            j++;
        }
        k++;
    }
    while (i < m) {
        nums[k] = nums1[i];
        i++;
        k++;
    }
    while (j < n) {
        nums[k] = nums2[j];
        j++;
        k++;
    }
    
    if ((m + n) % 2 === 0) {
        // even
        let mid = Math.floor((m + n) / 2);
        return (nums[mid] + nums[mid - 1]) / 2;
    } else {
        // odd
        return nums[Math.floor((m + n) / 2)];
    }
};

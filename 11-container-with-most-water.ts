/* Container with Most Water
 *
 *
 * Objective: 
 *      Given an array of non-negative integers, where each integer represents the height of a line drawn at that point, 
 *      find two lines that together with the x-axis form a container that holds the most water. 
 *      The aim is to maximize the area of the container.
 * Input:
 *      An array of non-negative integers.
 * Output:
 *      The maximum area of water the container can contain.
 *
 *
 * Example:
 *      Consider the array [1, 8, 6, 2, 5, 4, 8, 3, 7]:
 *      The maximum area is formed by the lines at positions 1 and 8 (1-indexed), which are heights 8 and 7. 
 *      The width between these lines is 8 - 1 = 7, so the area is 7 * min(8, 7) = 49.
 * */

export {};

// brute-force
// O(n^2)
const solution = (heights: number[]): number => {
    let maxArea = 0;
    
    for (let l = 0; l < heights.length - 1; l++) {
        for (let r = l + 1; r < heights.length; r++) {
            const width = r - l;
            const area = width * Math.min(heights[l], heights[r]);
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};


// simple sliding window algorithm
// O(n)
const solution2 = (heights: number[]): number => {
    
    let maxArea = 0;

    // begin with the highest width,
    // so that the variable could only be heights[l] and heights[r]
    let l = 0;
    let r = heights.length - 1;

    while (l < r) {
        const width = l - r;
        const area = width * Math.min(heights[l], heights[r]);
        if (area > maxArea) {
            maxArea = area;
        }
        
        if (heights[l] > heights[r]) {
            // if the left height is higher, then shift the right height.
            r -= 1;
        } else {
            // if the right height is higher or equal, then shift the left height.
            l += 1;
        }
    }

    return maxArea;
};

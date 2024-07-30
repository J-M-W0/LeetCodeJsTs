// product difference between two pairs {a, b} and {c, d} is
//      (a * b) - (c * d)

function maxProductDifference(nums: number[]): number {
    // maximize product difference between {nums[a], nums[b]} and {nums[c], nums[d]}
    // constraint: a !== b !== c !== d
    
    // this question can be reduced to:
    // find two pairs in this nums array, 
    // one is the paris that produces the biggest product,
    // the other is the one that produces the smallest product,
    // in the end return the difference between these two products.
 
    // sorting would make this question much easier.
    nums.sort((a, b) => a - b);
    let n = nums.length;
    return (nums[n - 1] * nums[n - 2] - nums[0] * nums[1]);
};

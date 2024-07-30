/* Leetcode 1. Two Sum                                                                         
 *                                                                                             
 * Objective: Find two numbers in an array that add up to a specific target number.            
 * Input:                                                                                      
 *      target: An integer, the target sum.                                                    
 *      numbers: An array of integers.                                                         
 * Output:                                                                                     
 *      Return the indices of the two numbers such that they add up to target.                 
 * Constraints:                                                                                
 *      Each input would have exactly one solution, and you may not use the same element twice.
 *      The answer can be returned in any order.                                               
 * */
const twoSum = (target, numbers) => {
    // outer loop
    for (let i = 0; i < numbers.length; i++) {
        // calculate difference for the other half of the number.
        const diff = target - numbers[i];
        // inner loop
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === diff && i !== j) {
                // if find two numbers that add up equal to the target,
                // then return these two indices.                      
                return [i, j];
            }
        }
    }
    // When no solution found for the provided parameters,
    // return an empty array.
    return [];
};

// Using hash map.
// 该题考验你运用 HashMap 的能力.
const twoSum2 = (target, numbers) => {
    
    // setting up a number map for search.
    const numberMap = new Map();

    // loop through each element.
    for (let i = 0; i < numbers.length; i++) {
        // get the current difference.
        const diff = target - numbers[i];
        if (numberMap.has(diff)) {
            // if numberMap has diff's index, then return.
            return [numberMap.get(diff), i];
        }
            // otherwise, just set the numberMap with element in numbers and its index.
        numberMap.set(numbers[i], i);
    }

    // When no solution found for the provided parameters.
    return [];

};

const twoSum3 = (target, numbers) => {
    // number[][]
    const indexedNumbers = numbers.map((number, index) => [number, index]);
    const sortedIndexedNumbers = indexedNumbers.sort((a, b) => (a[0] - b[0]));

    let leftIndex = 0;
    let rightIndex = sortedIndexedNumbers.length - 1;
    while (leftIndex < rightIndex) {
        const sum = sortedIndexedNumbers[leftIndex][0] + sortedIndexedNumbers[rightIndex][0];
        if (sum < target) {
            leftIndex++;
        } else if (sum > target) {
            rightIndex--;
        } else {
            // if (sum === target)
            return [sortedIndexedNumbers[leftIndex][1], sortedIndexedNumbers[rightIndex][0]];
        };
    }

    // When no solution found for the provided parameters.
    return [];
};

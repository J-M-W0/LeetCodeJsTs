/* Leetcode 14: Longest Common Prefix
 *
 *
 * Objective: 
 *      Write a function to find the longest common prefix string amongst an array of strings. 
 *      If there is no common prefix, return an empty string "".
 * Input:
 *      An array of strings.
 * Output:
 *      A string representing the longest common prefix among all the strings in the array.
 * 
 *
 * Example1:
 *      strs = ["flower","flow","flight"]:
 *      The longest common prefix is "fl".
 *
 * Example2: 
 *      strs = ["dog","racecar","car"]:
 *      There is no common prefix among the input strings, so the function returns an empty string "".
 * */

export {};
function longestCommonPrefix(strs: string[]): string {

    let prefix: string = strs[0];
    
    // comparing start from the second string.
    for (let i = 1; i < strs.length; i++) {

        // if prefix too long, truncate it to the size of the smallest string first.
        if (prefix.length > strs[i].length) {
            prefix = prefix.slice(0, strs[i].length);
        }
        // slice the prefix if missmatches.
        for (let j = 0; j < strs[i].length; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.slice(0, j);
            }
        }
        // save up time, if prefix already is empty string, just return.
        if (prefix === '') {
            break;
        }
    }

    return prefix;
};

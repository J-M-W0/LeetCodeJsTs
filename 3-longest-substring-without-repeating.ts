/* Leetcode 3: Longest Substring without Repeating
 *
 * Objective: Find the length of the longest substring without repeating characters in a given string.
 * Input:
 *      s: A string.
 * Output:
 *      An integer representing the length of the longest substring without repeating characters.
 * 
 * Example 1: 
 *      s = "abcabcbb"
 *      The longest substring without repeating characters is "abc", with the length of 3.
 * 
 * Example 2: s = "bbbbb"
 *      The longest substring without repeating characters is "b", with the length of 1.
 * 
 * Example 3: s = "pwwkew"
 *      The longest substring without repeating characters is "wke", with the length of 3. 
 *      Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * */

export {}; // an empty export.

// sliding window technique
// O(n)
const solution = (s: string): number => {

    if (s.length <= 1) {
        return 1;
    }

    let maxLength = 0; // return value, maximum length.

    let l = 0; // left window pointer.
    let r = 0; // right window pointer.
    let charSet = new Set<string>(); // characters contained in the window.

    for(r = 0; r < s.length; r++) {
        // check if the character set already contains the character,
        // if so, moving the left border of the window until it was deleted.
        const c = s.charAt(r);
        while (charSet.has(c)) {
            charSet.delete(s[l]);
            l += 1;
        }
        // add the character into the set after each iteration.
        charSet.add(c);
        // update the length if necessary.
        if (r - l + 1 > maxLength) {
            maxLength = r - l + 1;
        }
    }

    return maxLength;
}

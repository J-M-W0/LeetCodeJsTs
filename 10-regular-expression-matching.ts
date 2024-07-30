/* Leetcode 10: Regular Expression Matching
 *
 * Objective: 
 *      Implement regular expression matching with support for '.' and '*' characters. 
 *      The '.' character matches any single character, 
 *      while '*' character matches zero or more of the preceding element.
 * Input:
 *      s: A string that could be empty and contains only lowercase letters a-z.
 *      p: A pattern string which could be empty and contains only lowercase letters a-z, 
 *          and characters like . or *.
 * Output:
 *      true if the string matches the given pattern, otherwise false. 
 *
 *
 * Example 1: 
 *      s = "aa", p = "a"
 *      The pattern does not match the entire string, so the function should return false.
 *
 * Example 2: 
 *      s = "aa", p = "a*"
 *      The pattern a* means 'zero or more of the preceding element', 
 *      which in this case is a. 
 *      Therefore, it matches the string "aa", and the function should return true.
 *
 * Example 3: 
 *      s = "ab", p = ".*"
 *      The pattern .* means 'zero or more of any character', so it matches any string, 
 *      including "ab". The function should return true.
 *
 * Example 4: 
 *      s = "aab", p = "c*a*b"
 *      The pattern c*a*b translates to 'zero or more cs, 
 *      followed by zero or more as, followed by a b'. 
 *      This matches the string "aab", so the function should return true.
 *
 * Example 5: 
 *      s = "mississippi", p = "mis*is*p*."
 *      The pattern does not match the entire string "mississippi", 
 *      so the function should return false.
 * */

export {};

// dynamic programming, memoization
const solution = (s:string, p:string): boolean => {

    const dp: boolean[][] = Array(s.length + 1).fill(false).map(() => Array(p.length + 1).fill(false));
    
    // empty string matches empty pattern.
    dp[0][0] = true;

    // pre-fill the table for patterns with '*' as they can match empty string.
    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = dp[0][i - 2];
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                            // '*' matches zero of the previous character.
                dp[i][j] = dp[i][j - 2] || 
                            // '*' matches one or more occurrence of the previous character.
                           ((p[j - 2] === s[i - 1] || p[j - 2] === '.') &&
                            // check if the current string excluding the current character matches the pattern including the '*'.
                            dp[i - 1][j]);
            }
        }
    }

    return dp[s.length][p.length];
};

const solution2 = (s:string, p:string): boolean => {
    if (p.length === 0) {
        return (s.length === 0);
    }
    const firstMatch: boolean = s.length > 0 && (p[0] === s[0] || p[0] === '.');

    if (p.length >= 2 && p[1] === '*') {
        return solution2(s, p.substring(2)) || (firstMatch && solution2(s.substring(1), p));
    } else {
        return firstMatch && solution2(s.substring(1), p.substring(1));
    }
};

// dynamic programming, 
// top-down memoization
// better than those solutions above.
const solution3 = (s: string, p: string): boolean => {
    if (p.length === 0) {
        return (s.length === 0);
    }
    
    // a cached dictionary for memoization.
    let cache: { [value: string]: boolean } = {};

    // define a callback function for solving the problem.
    /**
     *
     * @param i index for s;
     * @param j index for p;
     * @returns true for matched and false for not matched;
     */
    const callback = (i: number, j: number): boolean => {
        // each combo of i and j is unique, thus can be used for key.
        const key: string = i + ',' + j;
        // if the key is already in the cache, thus return the value in the cache.
        if (key in cache) {
            return cache[key];
        }
        // if index 'i' and 'j' are both out of bound,
        // means it has all successfully matched.
        if (i >= s.length && j >= p.length) {
            return true;
        }
        // if index 'i' was still in bound,
        // but 'j' already out of bound, 
        // means it has failed for matching.
        if (j >= p.length) {
            return false;
        }
        // j < p.length, i >= s.length || i < s.length
        let match: boolean = (i < s.length) && (s[i] === p[j] || p[j] === '.');
        if ((j + 1 < p.length) && (p[j + 1] === '*')) {
            cache[key] = (callback(i, j + 2) || (match && callback(i + 1, j)));
            return cache[key];
        }
        if (match) {
            cache[key] = callback(i + 1, j + 1);
            return cache[key];
        }
        cache[key] = false;
        return false;
    };

    return callback(0, 0);
};

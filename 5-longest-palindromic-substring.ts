/* Leetcode 5: Longest Palindromic Substring
 * 
 *
 *  Objective: Find the longest palindromic substring in a given string.
 *  Input:
 *      s: A string.
 *  Output:
 *      A string representing the longest palindromic substring.
 *   
 *  Example: 
 *      s = "babad"
 *      Potential palindromes are "bab" and "aba". 
 *      Both are valid, but either one can be returned as the longest palindromic substring.
 *
 *  Example: 
 *      s = "cbbd"
 *      The longest palindromic substring is "bb". 
 * */

export {};

// using dynamic programming thinking way
const solution = (s: string): string => {
    
    if (s.length <= 1) {
        return s;
    }

    const n = s.length;
    let result: string = '';

    // the table in dynamic programming for preserving the middle-status,
    // table[i][j] represents that the s.substring(i, j + 1) is palindromic.
    let table: boolean[][] = Array(n).map(() => Array(n).fill(false));

    // every string of length 1 is palindromic.
    for (let i = 0; i < n; i++) {
        table[i][i] = true;
    }

    for (let len = 2; len <= n; len++) {
        for (let start = 0; start + len - 1 < n; start++) {
            const end = start + len - 1;
            if (s[start] === s[end]) {
                if (len === 2 || table[start + 1][end - 1] === true) {
                    table[start][end] = true;
                    const palindrome = s.substring(start, end + 1);
                    if (palindrome.length > result.length) {
                        result = palindrome;
                    }
                }
            }
        }
    }

    return result;
};


// brute-force
const isPalindromic = (s: string): boolean => {
    let leftIndex = 0;
    let rightIndex= s.length - 1;
    while (leftIndex < rightIndex) {
        if (s[leftIndex] !== s[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
};

const solution2 = (s: string): string => {

    if (s.length <= 1) {
        return s;
    }

    let maxLength = s.length;
    for (let len = s.length; len > 0; len--) {
        for (let leftIndex = 0; leftIndex + len <= s.length; leftIndex++) {
            let rightIndex = leftIndex + len - 1;
            if (isPalindromic(s.substring(leftIndex, rightIndex + 1))) {
                return s.substring(leftIndex, rightIndex + 1);
            }
        }
    }

    return '';

};

// thinking: expand around center, faster than the previous two.

const expandAroundCenter = (s: string, l: number, r: number): number[] => {
    while (l >= 0 && r < s.length && s[l] == s[r]) {
        l--;
        r++;
    }
    return [l + 1, r - 1];
}

const solution3 = (s: string): string => {
    if (s.length <= 1) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    for (let i = 0; i < s.length; i++) {

        // odd length palindrome.
        let [l, r] = expandAroundCenter(s, i, i);
        if (r - l + 1 > maxLength) {
            maxLength = r - l + 1;
            start = l;
        }

        // even length palindrome.
        [l, r] = expandAroundCenter(s, i, i + 1);
        if (r - l + 1 > maxLength) {
            maxLength = r - l + 1;
            start = l;
        }
    }

    return s.substring(start, start + maxLength);
};

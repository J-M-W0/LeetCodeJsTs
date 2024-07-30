/* Leetcode 8: String to Integer (atoi)
 *
 * 
 * Objective: 
 *      Implement the atoi function, which converts a string to a 32-bit signed integer 
 *      (similar to C/C++'s atoi function).
 * Input:
 *      s: A string that could contain whitespace, numbers, and possibly a sign (+/-) at the beginning. 
 *      The string may also contain non-numeric characters after the number.
 * Output:
 *      An integer represented by the numeric part of the string. 
 *      If no valid conversion can be performed, return 0. 
 *      If the number is out of the range of a 32-bit signed integer, 
 *      return INT_MAX (2³¹ − 1) or INT_MIN (−2³¹).
 *
 * 
 * Example: 
 *      s = "42"
 *      The function should return 42.
 * 
 * Example: 
 *      s = " -42"
 *      After discarding whitespaces, the function should convert -42 and return -42.
 *
 * Example: 
 *      s = "4193 with words"
 *      The function should convert and return 4193 
 *      as it stops parsing when it reaches the first non-numeric character.
 *
 * Example: 
 *      s = "words and 987"
 *      The function should return 0 as there are no numbers at the beginning of the string.
 *
 * Example: 
 *      s = "-91283472332"
 *      The number is out of range, so the function should return INT_MIN.
 * */

export {};
const solution = (s: string): number => {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);  // 0b1 << 31  = 0x80000000;

    let i = 0;
    let sign = 1;
    let result = 0;

    // discard whitespaces in the beginning.
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // check if the next char is a sign symbol.
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + parseInt(s[i]);
        if (sign === 1 && result > INT_MAX) {
            return INT_MAX;
        }
        if (sign === -1 && -result < INT_MIN) {
            return INT_MIN;
        }
    }

    return result * sign;
};

/* Leetcode 7: Reverse Integer
 *
 * Objective: Given a 32-bit signed decimal integer, reverse the digits of the integer.
 * Input:
 *      x: An integer.
 * Output:
 *      The reversed integer. 
 *      If the reversed integer overflows (i.e., is outside the range of a 32-bit signed integer), 
 *      return 0.
 * 
 * Example: 
 *      x = 123
 *      The reversed number is 321.
 * Example: 
 *      x = -123
 *      The reversed number is -321.
 * Example: 
 *      x = 120
 *      The reversed number is 21 (note how the leading zero in 120 is dropped).
 * Example: 
 *      x = 1534236469
 *      This exceeds the range after reversing, so the function should return 0.
 * */

export {};

// This questions tests your ability about manipulating integers,
// and understanding edge case in programming.
const solution = (x: number): number => {

    // reversing a single digit number will yield itself.
    if (x >= -9 && x <= 9) {
        return x;
    }

    let result: number = 0;
    let n: number = Math.abs(x);

    while (n > 0) {
        
        result = result * 10 + n % 10;
        // check for 32-bit integer overflow.
        if (result > 0x7FFFFFFF) {
            return 0;
        }

        n = Math.floor(n / 10);
    }


    return (x < 0) ? -result : result;
};


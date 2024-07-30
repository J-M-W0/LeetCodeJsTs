/* Leetcode 9: Palindrome Number
 *
 *
 * Objective: 
 *      Determine whether an integer is a palindrome. 
 *      An integer is a palindrome when it reads the same backward as forward.
 * Input:
 *      x: An integer.
 * Output:
 *      true if x is a palindrome, otherwise false.
 *
 *
 * Example: 
 *      x = 121
 *      It's a palindrome because it reads the same backward as forward.
 * 
 * Example: 
 *      x = -121
 *      It's not a palindrome because the minus sign in the front makes it read differently backward.
 * 
 * Example: 
 *      x = 10
 *      It's not a palindrome because it reads 01 backward.
 * */
export {};
const solution = (x: number): boolean => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        // negative number and multiples of ten are definitely not palindromic number.
        return false;
    }

    let n: number = x;
    let reversedNumber: number = 0;
    while (n > 0) {
        reversedNumber = reversedNumber * 10 + n % 10;
        n = Math.floor(n / 10);
    }

    return (x === reversedNumber);
};

// faster
const solution2 = (x: number): boolean => {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        // negative number and multiples of ten are definitely not palindromic number.
        return false;
    }

    let halfReversed: number = 0;
    while (x > halfReversed) {
        halfReversed = halfReversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    // (even digits) || (odd digits)
    return (x === halfReversed) || x === Math.floor(halfReversed / 10);
};

/* Leetcode 12: Integer to Roman
 *
 *
 * Objective: 
 *      Convert an integer to a Roman numeral. 
 *      Roman numerals are represented by combinations of letters from the Latin alphabet (I, V, X, L, C, D, M).
 *      I = 1, V = 5, X = 10,
 *      L = 50, C = 100, D = 500, M = 1000
 * Input:
 *      num: An integer.
 * Output:
 *      A string representing the number in Roman numeral format.
 *
 *
 * Example1:
 *      num = 58:
 *      The Roman numeral representation is "LVIII". 
 *      50 is represented by "L", 5 by "V", and 3 ones are represented by "III".
 *
 * Example2:
 *      num = 1994:
 *      The Roman numeral representation is "MCMXCIV". 1000 is "M", 900 is "CM", 90 is "XC", and 4 is "IV".
 * */

export {}; 
function intToRoman(num: number): string {

    const symbols: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numbers: number[] = [1000, 900, 500,  400, 100,  90,  50,  40,   10,   9,    5,   4,    1];

    let result: string = '';
    while (num > 0) {
        for (let i = 0; i < numbers.length; i++) {
            const diff = num - numbers[i];
            if (diff > 0) {
                result = result.concat(symbols[i]);
                num = diff;
                break;
            } else if (diff === 0) {
                result = result.concat(symbols[i]);
                return result;
            }
        }
    }

    return result;
};

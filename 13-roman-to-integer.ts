/* Leetcode 13: Roman to Integer
 *
 *
 * Objective: 
 *      Convert a Roman numeral to an integer. 
 *      Roman numerals are represented by combinations of letters from the Latin alphabet (I, V, X, L, C, D, M).
 * Input:
 *      s: A string representing a Roman numeral.
 * Output:
 *      An integer representing the number in the Roman numeral.
 *
 *
 * Example1: 
 *      s = "LVIII":
 *      The integer representation is 58. "L" is 50, "V" is 5, and "III" is 3.
 * Example2: 
 *      s = "MCMXCIV":
 *      The integer representation is 1994. 
 *      "M" is 1000, "CM" is 900 (1000 - 100), "XC" is 90 (100 - 10), and "IV" is 4 (5 - 1).
 * */

export {};
const solution = (roman: string): number => {
    const romanMap: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let num = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanMap[roman[i]];
        const next = (i < roman.length - 1) ?  romanMap[roman[i + 1]] : 0;

        if (current < next) {
            num -= current;
        } else {
            // if (current >= next)
            num += current
        }
    }

    return num;
};


function romanToInt(s: string): number {

    const symbols: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const numbers: number[] = [1000, 900, 500,  400, 100,  90,  50,  40,   10,   9,    5,   4,    1];
    
    let result: number = 0;
    while (s.length >= 1) {
        for (let i = 0; i < symbols.length; i++) {
            if (s.indexOf(symbols[i]) === 0) {
                result += numbers[i];
                s = s.slice(symbols[i].length);
                break;
            }
        }
    }

    return result;
};

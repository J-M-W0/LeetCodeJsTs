/* Leetcode 17: Letter Combination of a Phone Number
 *
 *
 * Objective: 
 *      Given a string containing digits from 2-9 inclusive, 
 *      return all possible letter combinations that the number could represent, 
 *      according to the mapping on a telephone keypad.
 * Input:
 *      A string containing digits from 2-9.
 * Output:
 *      A list of all letter combinations that the digits could represent.
 *
 *
 * Example: 
 *      digits = "23":
 *      The function would return combinations like ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * */

export {};

const solution = (digits: string): string[] => {
    if (digits.length === 0) {
        return [];
    }

    const memo: {[value: string]: string} = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };

    let answer: string[] = [];

    for (let digit of digits) {
        const letters: string[] = memo[digit].split('');
        const n = answer.length;
        if (n === 0) {
            answer = letters;
        }
        for (let i = 0; i < n; i++) {
            const s: string = answer.shift() ?? '';
            for (let letter of letters) {
                answer.push(s.concat(letter));
            }
        }
    }

    return answer;
};

// callback function recursive method;
// this one is more efficient than the the solution above.
function letterCombinations(digits: string): string[] {
    // if digits is an empty string, just return an empty string list.
    if (digits.length === 0) {
        return [];
    }
    // dictionary for mapping digit to letters.
    let memo: {[value: string]: string} = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };
    // callback function;
    // 
    // at the beginning, looking for 'index' zero with an empty prefix,
    // also at this time the combinations are none - empty list;
    //
    // then gradually call the function recursively back,
    const callback = (index: number =0, prefix: string='', combinations: string[]=[]): string[] => {
        
        // base case:
        //      if the prefix's length is equal to the length of the digits,
        //      then it means that it has reached the fullest prefix,
        //      thus append the prefix onto the combinations list and return the list.
        if (prefix.length === digits.length) {
            combinations.push(prefix);
            return combinations;
        }

        const letters = memo[digits[index]].split('');
        for (const letter of letters) {
            combinations = callback(index + 1, prefix.concat(letter), combinations);
        }
        return combinations;
    };
    
    return callback();
};


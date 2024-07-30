/* Leetcode 22: Generate Parentheses
 *
 *
 * Objective: 
 *      Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * Input:
 *      An integer n, representing the number of pairs of parentheses.
 * Output:
 *      A list of strings, where each string represents a valid combination of n pairs of parentheses.
 *
 *
 * Example:
 *      n = 3, the function will generate combinations like ["((()))", "(()())", "(())()", "()(())", "()()()"].
 * */

export {};

function generateParenthesis(n: number): string[] {
    // because when n === 1 it's so simple so we just return '()'
    if (n === 1) {
        return ['()'];
    }
    // the answer array of strings to be returned.
    let answer: string[] = [];

    // call back function;
    // recursively build the parentheses;
    // s: the parentheses string to be built;
    // open: number of '('
    // close: number of ')'
    const callback = (s: string ='', open: number =0, close: number =0) => {
        // base case:
        //      when the string length is 2n,
        //      which means there're enough '('s and ')'s,
        //      push it onto the array.
        if (s.length === n * 2) {
            answer.push(s);
            return;
        }

        // if the number of '(' is less than n,
        // so we can keep on adding it.
        if (open < n) {
            callback(s + '(', open + 1, close);
        }

        // because the parentheses must be closed by ')', 
        // so the number of ')' cannot be more than the number of '('
        if (close < open) {
            callback(s + ')', open, close + 1);
        }
    };

    callback();
    return answer;
};

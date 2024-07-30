/* Leetcode 20: Valid Parentheses
 *
 *
 * Objective: 
 *      Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
 *      determine if the input string is valid. An input string is valid if:
 *      Open brackets must be closed by the same type of brackets.
 *      Open brackets must be closed in the correct order.
 *
 *
 * Example1:
 *      For s = "()", the function should return true as the brackets are correctly matched.
 * 
 * Example2:
 *      For s = "([)]", the function should return false as the brackets are not matched in the correct order.
 *
 * Example3:
 *      For s = "{[]}", the function should return true as all types of brackets are matched in the correct order.
 * */

export {};
const solution = (s: string): boolean => {
    const stack: string[] = [];
    
    let missMatch = false;
    for (let c of s) {
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else if (c === ')') {
            if (stack.pop() !== '(') {
                missMatch = true;
                break;
            }
        } else if (c === ']') {
            if (stack.pop() !== '[') {
                missMatch = true;
                break;
            }
        } else if (c === '}') {
            if (stack.pop() !== '{') {
                missMatch = true;
                break;
            }
        }
    }

    return !missMatch && (stack.length === 0);
};

// not quite effient but intuitive way.
function isValid(s: string): boolean {

    let top = 0;
    let parenthese: string[] = [];

    const push = (c: string) => {
        parenthese[top] = c;
        top++;
    }

    const pop = () => {
        if (top <= 0) {
            return '#';
        }
        top--;
        return parenthese[top];
    }

    for (let letter of s) {
        switch (letter) {
            case '(':
            case '[':
            case '{':
                push(letter);
                break;
            case ')':
                if (pop() !== '(') {
                return false;
            }
                break;
            case ']':
                if (pop() !== '[') {
                return false;
            }
                break;
            case '}':
                if (pop() !== '{') {
                return false;
            }
                break;
            default:
                // do nothing.
        }
    }
    
    return (top === 0);
};

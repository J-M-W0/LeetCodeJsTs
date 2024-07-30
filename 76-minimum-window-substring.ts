/* Leetcode 76: Minimum Window Substring
 *
 * Given two strings s and t, return the minimum window in s which will contain all the characters in t.
 * If there is no such window in s that covers all characters in t, return an empty string.
 *
 * Example:
 *      Input: s = "ADOBECODEBANC", t = "ABC"
 *      Output: "BANC"
 * */

export {};

const solution = (s: string, t:string): string => {
    
    if (t === '') {
        return '';
    }

    let resultWindow = [-1, -1];
    let minWindowSize = Infinity;

    let countT = new Map<string, number>();
    for (let c of t) {
        const count = countT.get(c) ?? 0;
        countT.set(c, count + 1);
    }

    let window = new Map<string, number>();
    let have = 0;
    let need = t.length;

    let l = 0;
    let r = 0;

    for (r = 0; r < s.length; r++) {
        const c = s.charAt(r);
        window.set(c, (window.get(c) ?? 0) + 1);

        if (countT.has(c) && window.get(c) === countT.get(c)) {
            have += 1;
        }

        while (have === need) {
            // update the result/
            if ((r - l + 1) < minWindowSize) {
                minWindowSize = r - l + 1;
                resultWindow = [l, r];
            }
            // pop from left of our window.
            window.set(s.charAt(l), window.get(s.charAt(l) - 1));
            if (
                countT.has(s.charAt(l)) && 
                ( window.get(s.charAt(l)) < countT.get(s.charAt(l)) ) 
               ) 
            {
                have -= 1;
            }
            // move the window left pointer one block forward.
            l += 1;
        }
    }
    
    if (minWindowSize === Infinity) {
        return '';
    } else {
        [l, r] = resultWindow;
        return s.substring(l, r + 1);
    }
};


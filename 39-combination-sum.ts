// dynamic programming, memoiszation;
// slow;
function combinationSum(candidates: number[], target: number): number[][] {
    
    // `Record` just works like a dictionary
    const memo: Record<string, number[][]> = {};

    const backtrack = (remaining: number, start: number): number[][] => {
        // base case:
        // if remaining === 0, meaning that we've found a combination.
        if (remaining === 0) {
            return [[]];
        }

        // base case:
        // if remaining < 0, meaning that no valid combination is found.
        if (remaining < 0) {
            return [];
        }

        // lookup the dictionary if we've already had a record.
        const key = remaining + ',' + start;
        if (memo[key]) {
            return memo[key];
        }

        let combos: number[][] = [];
        for (let i = start; i < candidates.length; i++) {
            const candidate = candidates[i];
            const diff = remaining - candidate;
            // find combins for 'diff';
            // start from 'i' to skip repeated result.
            const nextCombos = backtrack(diff, i);
            // combos of 'diff' plus 'candidate' is the combos for 'remaining'
            for (const nextCombo of nextCombos) {
                combos.push([...nextCombo, candidate])
            }
        }

        memo[key] = combos;
        return combos;
    };

    return backtrack(target, 0);
};

// faster, with better time and space complexity.
const combinationSum2 = (candidates: number[], target: number): number[][] => {

    const answer: number[][] = [];
    
    // depth-first-search
    const dfs = (sum: number, startIndex: number, path: number[]) => {
        // if sum === target,
        // we know that we've found the correct path, thus push it to our answer.
        if (sum === target) {
            // do not use:
            //      answer.push(path);
            // because via this way,
            // if 'path' was later modified, the element inside answer will also be changed!
            // Thus, use array copy.
            answer.push([...path]);
            return;
        }

        // if sum > target OR if startIndex >= candidates.length,
        // then we know that the path we're going in is wrong, this stop.
        if (sum > target || startIndex >= candidates.length) {
            return;
        }
        
        // because it is allowed to use same elements multiple time.
        const candidate = candidates[startIndex];
        
        // re-take current element.
        sum += candidate;
        path.push(candidate);

        dfs(sum, startIndex, path);

        // exclude current element.
        path.pop()
        sum -= candidate;
        dfs(sum, startIndex + 1, path);
    };

    dfs(0, 0, []);

    return answer;

};

combinationSum2([2, 3, 6, 7], 7);

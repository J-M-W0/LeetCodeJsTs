function fib(n: number): number {
    const backtrack = (num: number, memo: {[key: number]: number} = {}): number => {
        // base case 1:
        if (num === 0) {
            return 0;
        }
        // base case 2:
        if (num === 1 || num === 2) {
            return 1;
        }

        // check memoization
        if (num in memo) {
            return memo[num];
        }

        memo[num] = backtrack(num - 1, memo) + backtrack(num - 2, memo);
        return memo[num];
    };
    
    return backtrack(n);
};


const fib2 = (n: number): number => {
    if (n === 0 || n === 1) {
        return n;
    }

    let n0 = 0;
    let n1 = 1;
    let curr = 0;

    for (let i = 2; i <= n; i++) {
        curr = n0 + n1;
        n0 = n1;
        n1 = curr;
    }

    return curr;

};

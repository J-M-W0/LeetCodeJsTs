const myPow1 = (x: number, n: number): number => {
    return x ** n;
};

function myPow2(x: number, n: number): number {
    // Handle the case of negative exponent
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    return fastPow(x, n);
}

function fastPow(x: number, n: number, memo = {}): number {
    if (n === 0) {
        return 1;
    }
    if (n === 1) {
        return x;
    }

    if (n in memo) {
        return memo[n];
    }

    // Recursively apply the fastPow to reduce the problem size
    let half = fastPow(x, Math.floor(n / 2), memo);
    memo[n] = half;
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    }
}


export {};

function isHappy(n: number): boolean {

    while (n >= 10) {
        n = sumDigitSquare(n);
    }

    // 1 and 7 are the only single-digit happy numbers.
    return (n === 1 || n === 7);
};

function sumDigitSquare(n: number): number {
    let sum = 0;
    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }
    return sum;
};

/* time: O(n * log(n))
 * space: O(1)
 * */
function isHappy2(n: number): boolean {
    if (n === 1 || n === 7) {
        return true;
    }

    let sum: number = n;
    while (sum > 9) {
        sum = sum
            .toString()
            .split('')
            .map(digit => Number(digit))
            .reduce((partialSum, a) => (partialSum + a * a), 0);
    }

    return (sum === 1 || sum === 7);
};

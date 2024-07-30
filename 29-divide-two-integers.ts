function divide(dividend: number, divisor: number): number {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    let quotient = dividend / divisor;
    if (quotient > 0) {
        if (quotient > INT_MAX) {
            return INT_MAX;
        }
        quotient = Math.floor(quotient);
    } else {
        if (quotient < INT_MIN) {
            return INT_MIN;
        }
        quotient = Math.ceil(quotient);
    }
    return quotient;
};

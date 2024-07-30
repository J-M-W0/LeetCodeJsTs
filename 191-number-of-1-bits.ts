function hammingWeight(n: number): number {
    let count = 0;
    while (n !== 0) {
        count += n & 1;
        // unsigned right shift.
        n = n >>> 1;
    }
    return count;
};

const hammingWeight2 = (n: number): number => {
    return n
        .toString(2) // convert to its equivalent binary form.
        .split('')
        .reduce(
            (total: number, current: string) => ((current === '0') ? total : total + 1)
            , 0);
};

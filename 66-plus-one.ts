function plusOne(digits: number[]): number[] {
    
    const callback = (index: number=digits.length - 1): number[] => {
        if (digits[index] !== 9) {
            digits[index] += 1;
            return digits;
        }
        digits[index] = 0;
        if (index === 0) {
            digits.unshift(1);
            return digits;
        }
        return callback(index - 1);
    };
    
    return callback();
};

const plusOne2 = (digits: number[]): number[] => {
    const callback = (index: number=digits.length - 1) => {
        if (digits[index] !== 9) {
            digits[index] += 1;
            return;
        }
        digits[index] = 0;
        if (index === 0) {
            digits.unshift(1);
            return;
        }
        callback(index - 1);
    };
    
    callback();
    return digits;
};

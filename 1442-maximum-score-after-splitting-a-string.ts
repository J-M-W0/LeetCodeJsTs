// O(n^2)
function maxScore(s: string): number {
    let score: number = 0;

    const countZeroes = (leftStr: string) => {
        let zeroes = 0;
        for (let str of leftStr) {
            if (str === '0') {
                zeroes++;
            }
        }
        return zeroes;
    };
    
    const countOnes = (rightStr: string) => {
        let ones = 0;
        for (let str of rightStr) {
            if (str === '1') {
                ones++;
            }
        }
        return ones;
    };

    for (let splitIndex = 1; splitIndex < s.length; splitIndex++) {
        const leftStr = s.slice(0, splitIndex);
        const rightStr = s.slice(splitIndex, s.length + 1);
        const newScore = countZeroes(leftStr) + countOnes(rightStr);
        score = Math.max(score, newScore);
    }

    return score;
};

// O()n
function maxScore2(s: string): number {
    let score = 0;
    let countZeroes = 0;
    let countOnes = 0;

    // First, count the total number of ones in the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            countOnes++;
        }
    }

    // Iterate through the string, update counts and calculate score
    for (let i = 0; i < s.length - 1; i++) { // Note: we go only up to s.length - 1
        if (s[i] === '0') {
            countZeroes++;
        } else {
            countOnes--;
        }

        score = Math.max(score, countZeroes + countOnes);
    }

    return score;
}

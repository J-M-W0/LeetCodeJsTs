function minOperations(s: string): number {

    // because for making s into alternating strings,
    // there're only two choices - 010101... and 101010...

    // check for operations to make s into '0101010101...'
    let answer1: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] !== '0') {
                answer1++;
            }
        } else {
            if (s[i] !== '1') {
                answer1++;
            }
        }
    }
    
    // check for operations to make s into '1010101010...'
    let answer2: number = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] !== '1') {
                answer2++;
            }
        } else {
            if (s[i] !== '0') {
                answer2++;
            }
        }
    }
    
    return (answer1 < answer2) ? answer1 : answer2;
};

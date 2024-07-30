function titleToNumber(columnTitle: string): number {
    let answer: number = 0;
    const A = 'A';
    const asciiA = A.charCodeAt(0);
    for (let i = 0; i < columnTitle.length; i++) {
        const ascii = columnTitle.charCodeAt(i) - asciiA + 1;
        answer = answer * 26 + ascii;
    }
    return answer;
};

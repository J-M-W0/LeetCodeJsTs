function lengthOfLastWord(s: string): number {
    if (s.length === 0) {
        return 0;
    }

    if (s.length === 1) {
        return (s[0] === ' ') ? 0 : 1;
    }

    let answer: number = 0;
    let end  = s.length - 1;
    while (end >= 0 && s[end] === ' ') {
        end--;
    }
    for (end; end >= 0; end--) {
        if (s[end] === ' ') {
            break;
        }
        answer++;
    }
    return answer;
};

const lengthOfLastWord2 = (s: string): number => {
    const readyString = s.trimEnd().split(' ');
    return readyString[readyString.length - 1].length;
};

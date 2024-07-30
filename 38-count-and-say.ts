// recursive thinking.
function countAndSay(n: number): string {
    // base case:
    //      if n === 1, return '1'
    if (n === 1) {
        return '1';
    }
    
    // get the string result from the previous answer,
    // then count and say the previous answer.
    const prevSay = countAndSay(n - 1);
   
    let answer: string = '';
    let prevChar = prevSay[0];
    let count = 0;
    for (let c of prevSay) {
        if (c !== prevChar) {
            answer = answer + '' + count + '' + prevChar;
            count = 0;
            prevChar = c;
        }
        count++;
    }
    answer = answer + '' + count + prevChar;

    return answer;
};

/* 
 *
 * A  <-> 1
 * B  <-> 2
 * C  <-> 3
 *  ...
 * Z  <-> 26
 * 
 * AA <-> 27
 * AB <-> 28
 * AC <-> 29
 *  ...
 *
 * topic: math, string
 * */
function convertToTitle(columnNumber: number): string {
    let answer: string = '';
    const A = 'A';
    const asciiA = A.charCodeAt(0);
    while (columnNumber > 0) {
        // decrement to handle 'Z'.
        columnNumber--;
        // determine the ascii character to add.
        const n = columnNumber % 26;
        const ascii = String.fromCharCode(asciiA + n);

        answer = ascii + answer;

        columnNumber = Math.floor(columnNumber / 26);
    }
    return answer;
};

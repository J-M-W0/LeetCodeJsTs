/*
 *      (a + b) ^ 2
 *                          1                           rowIndex 0 -> [1]
 *                      1       1                       rowIndex 1 -> [1, 1]
 *                  1       2       1                   rowIndex 2 -> [1, 2, 1]
 *              1       3       3       1               rowIndex 3 -> [1, 3, 3, 1]
 *          1       4       6       4       1           rowIndex 4 -> [1, 4, 6 , 4, 1]
 *      1       5       10      10      5       1       rowIndex 5 -> [1, 5, 10, 10, 5, 1]
 *                  ...     ...     ...
 * */
function getRow(rowIndex: number): number[] {
    if (rowIndex === 0) {
        return [1];
    }
    
    const backtrack = (currIndex: number, currTriangle: number[]): number[] => {
        if (currIndex > rowIndex) {
            return currTriangle;
        }
        let triangle = new Array(currIndex + 1);
        triangle[0] = triangle[currIndex] = 1;
        for (let i = 1; i < currIndex; i++) {
            triangle[i] = currTriangle[i - 1] + currTriangle[i];
        }
        return backtrack(currIndex + 1, triangle);
    };
    
    return backtrack(0, [1]);
};

const getRow2 = (rowIndex: number): number[] => {
    let triangle = [1];

    for (let i = 1; i <= rowIndex; i++) {
        triangle[i] = (triangle[i - 1] * (rowIndex - i + 1)) / i;
    }
    
    return triangle;
};

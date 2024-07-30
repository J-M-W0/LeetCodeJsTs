function generate(numRows: number): number[][] {
    
    if (numRows === 1) {
        return [[1]];
    }

    if (numRows === 2) {
        return [[1], [1, 1]];
    }

    if (numRows === 3) {
        return [[1], [1, 1], [1, 2, 1]];
    }

    let answer = [[1], [1, 1]];

    const backtrack = (row: number, sum: number[]) => {
        if (row > numRows) {
            return;
        }
        answer.push(sum);
        let newSum = Array(row + 1).fill(0);
        newSum[0] = newSum[row] = 1;
        for (let i = 1; i < row; i++) {
            newSum[i] = sum[i - 1] + sum[i];
        }
        backtrack(row + 1, newSum);
    };

    backtrack(3, [1, 2, 1]);
    return answer;
};

const generate2 = (numRows: number): number[][] => {
        
    if (numRows === 1) {
        return [[1]];
    }

    if (numRows === 2) {
        return [[1], [1, 1]];
    }

    if (numRows === 3) {
        return [[1], [1, 1], [1, 2, 1]];
    }

    const backtrack = (row: number, sum: number[], memo={}) => {
        if (row > numRows) {
            return;
        }

        answer.push(sum);
        let newSum: number[];
        if (row in memo) {
            newSum = memo[row];
        } else {
            newSum = Array(row + 1).fill(0);
            newSum[0] = newSum[row] = 1;
            for (let i = 1; i < row; i++) {
                newSum[i] = sum[i - 1] + sum[i];
            }
            memo[row] = newSum;
        }
        backtrack(row + 1, newSum, memo);

    };

    let answer = [[1], [1, 1]];
    backtrack(3, [1, 2, 1]);
    return answer;
};

// dynamic programming.
/*
 *                          1                           row 1 -> [1]
 *                      1       1                       row 2 -> [1, 1]
 *                  1       2       1                   row 3 -> [1, 2, 1]
 *              1       3       3       1               row 4 -> [1, 3, 3, 1]
 *          1       4       6       4       1           row 5 -> [1, 4, 6 , 4, 1]
 *      1       5       10      10      5       1       row 6 -> [1, 5, 10, 10, 5, 1]
 *  1       6       15      20      15      6       1   row 7 -> [1, 6, 15, 20, 15, 6, 1]
 *              ...     ...     ...     ...
 * */
const generate3 = (numRows: number): number[][] => {
    // answer[i] <-> row i + 1
    let answer = new Array(numRows);

    // row 1 -> [1]
    answer[0] = [1];
    
    // i corresponds to row i + 1
    for (let i = 1; i < numRows; i++) {
        
        answer[i] = new Array(i + 1);

        answer[i][0] = answer[i][i] = 1;
        for (let j = 1; j < i; j++) {
            answer[i][j] = answer[i - 1][j - 1] + answer[i - 1][j];
        }
    }
    
    return answer;
};

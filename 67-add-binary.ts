function addBinary(a: string, b: string): string {

    const callback = 
        (i: number =a.length - 1, 
         j: number =b.length - 1, 
         carry: number =0, 
         answer: string=''): string => 
    {
        if (i < 0 && j < 0) {
            if (carry !== 0) {
                return '1' + answer;
            }
            return answer;
        }
        
        if (i < 0) {
            let sum = Number(b[j]) + carry;
            carry = (sum === 0 || sum === 1) ? 0 : 1;
            sum   = (sum === 0 || sum === 2) ? 0 : 1;
            return callback(i, j - 1, carry, sum + answer);
        }

        if (j < 0) {
            let sum = Number(a[i]) + carry;
            carry = (sum === 0 || sum === 1) ? 0 : 1;
            sum   = (sum === 0 || sum === 2) ? 0 : 1;
            return callback(i - 1, j, carry, sum + answer);
        }

        let sum = Number(a[i]) + Number(b[j]) + carry;
        carry = (sum === 0 || sum === 1) ? 0 : 1;
        sum   = (sum === 0 || sum === 2) ? 0 : 1;
        return callback(i - 1, j - 1, carry, sum + answer);
    };
    
    return callback();
};

function addBinary2(a: string, b: string): string {
    let carry = 0;
    let result = '';

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        let digitA = i >= 0 ? Number(a[i]) : 0;
        let digitB = j >= 0 ? Number(b[j]) : 0;

        const sum = digitA + digitB + carry;
        carry = Math.floor(sum / 2);
        result = (sum % 2) + result;
    }

    return result;
};

function addBinary3(a: string, b: string): string {

    const callback = 
        (i: number = a.length - 1, 
         j: number = b.length - 1, 
         carry: number = 0, 
         answer: string = ''): string => 
    {

        if (i < 0 && j < 0 && carry === 0) {
            return answer;
        }

        const val1 = (i >= 0) ? Number(a[i]) : 0;
        const val2 = (j >= 0) ? Number(b[j]) : 0;
        const sum = val1 + val2 + carry;

        return callback(i - 1, j - 1, Math.floor(sum / 2), (sum % 2) + answer);
    };

    return callback();
};




/* an ugly number is a positive integer whose prime factors are limited to 2, 3 and 5
 * */
function isUgly(n: number): boolean {
    if (n <= 0) {
        return false;
    }


    n = maxDivide(n, 2);
    n = maxDivide(n, 3);
    n = maxDivide(n, 5);

    return (n === 1);
};

/* reduces the number 'a' by stripping away all factors of 'b'.
 * e.g. a:= 60, b := 2, then maxDivide(60, 2) would divide 60 by 2 repeatedly,
 * until it's nolonger divisible by 2, so, 60 -> 30 -> 15
 * */
function maxDivide(a: number, b: number): number {
    while (a % b === 0) {
        a /= b;
    }
    return a;
};

isUgly(14)

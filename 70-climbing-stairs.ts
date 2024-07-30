// iterative dynamic programming.
function climbStairs(n: number): number {
    // base case:
    //      (1) n === 1, there's only one way.
    //      (2) n === 2, there're only two ways.
    if (n <= 2) {
        return n;
    }
    
    // first  := represents counts of one step.
    let first = 1;
    // second := represents counts of two steps.
    let second = 2;
    // loop from 3 stairs because we've already known the situations with 1 and 2 stairs.
    for (let i = 3; i <= n; i++) {
        // third := represents the number of ways to climb 'i' stairs;
        // it is calculated as sum of the previous two steps counts;
        // the number of ways to climb 'i' stairs is the sum of the ways to climb 'i-1' and 'i-2' stairs.
        // This is based on the logic that to reach the ith step, you can either:
        //      single step from the i-1th step.
        //      Take a double step from the i-2th step.
        let third = first + second;
        first = second;
        second = third;
    }

    return second;
};

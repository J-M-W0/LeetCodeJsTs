// currying
function createCounter(n: number): () => number {
    
    return function() {
        return n++;
    }
}

function createCounter2(n: number): () => number {
    
    let count = n;
    return function() {
        return count++;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

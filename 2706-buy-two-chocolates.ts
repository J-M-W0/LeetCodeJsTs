// 
function buyChoco(prices: number[], money: number): number {
    // the money left to be returned, must be >= 0;
    // here we set it to -1 in order to do the first initialization.
    let moneyLeft = -1;
    
    // brute-force, search through each comnbination.
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const price = prices[i] + prices[j];
            if (money - price >= 0) {
                if (moneyLeft === -1) {
                    // if moneyLeft has been initialized, then initialize it.
                    moneyLeft = money - price;
                } else {
                    // if moneyLeft has been initialized, then select the largest one.
                    moneyLeft = Math.max(moneyLeft, money - price);
                }
            }
        }
    }
    
    // return 'money' if no suitable value found, otherwise moneyLeft.
    return moneyLeft === -1 ? money : moneyLeft;
};

const buyChoco2 = (prices: number[], money: number) => {
    // firstly sort the prices array in ascending order.
    prices.sort((a, b) => a - b);
    for (let i = 1; i < prices.length; i++) {
        // return the first found valud comnbination (because it's the smallest comnbination).
        if (prices[i - 1] + prices[i] <= money) {
            return money - prices[i - 1] - prices[i];
        }
    }
    // if no valid comnbination found, return the value of money.
    return money;
};

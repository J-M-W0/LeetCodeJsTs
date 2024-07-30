/* Leetcode 121: Best Time to Buy and Sell Stock
 *
 * Say you hava na array for which the i-th element is the price of a given stack on day i.
 * If you were only permitted to complete at most one transaction (i.e. buy one and sell one share of the stock),
 * design an algorithm to find the maximum profit.
 *
 * Example:
 *      Input: [7, 1, 5, 3, 6, 4]
 *      Output: 5
 *      Explanantion:
 *          Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6 - 1 = 5
 * */

export {};

// Using sliding window algorithm:
const solution = (prices: number[]): number => {
    // setup two pointers, one on the day you buy, one on the day you sell.
    let buy = 0;
    let sell = 1;

    let maxProfit = 0;

    while (sell < prices.length) {
        if (prices[sell] - prices[buy] > 0) {
            const profit = prices[sell] - prices[buy];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            // if (prices[sell] - prices[buy] <= 0)
            // which means that the the current pirce at sell is lower than the price at buy,
            // so move the buy pointer there cause this buy-in price is lower.
            buy = sell;
        }
        // move forward sell by each day.
        sell += 1;
    }

    return maxProfit;
};

function toPercentValue(val: number, percent: number) {
  return val * (percent / 100);
}

/** 

* if profit exceeds  set % take half profit and keep
* if profit is fall set negative% take half of profit and re-invest 


**/

function takeProfit(
  initialDeposit: number,
  fluctuations: Array<number>,
  pp: number,
  lp: number
) {
  let equity = initialDeposit;
  let totalProfit = 0;
  fluctuations.forEach((it) => {
    // only take profit when take value is > entered value
    if (it >= pp) {
      // take and add half profit to totalProfit
      const profitOnEquity = toPercentValue(equity, it);
      totalProfit += profitOnEquity / 2;
      equity += profitOnEquity / 2;
    }
    if (it <= lp) {
      const lossOnEquity = toPercentValue(equity, it);
      const halfOfProfit = totalProfit / 2;
      equity += lossOnEquity + halfOfProfit;
    }

    // if (toPercentValue(equity, it) >= -10) {
    //     const newAdditionalEquity = prevEquityProfit / 2;
    //     const profitOnEquity = toPercentValue(newAdditionalEquity, it);

    //     totalProfit += prevEquityProfit + profitOnEquity;
    //     // re-invest half of profit
    //     equity += prevEquityProfit + newAdditionalEquity
    // }

    return { equity, totalProfit };
  });
}

const profits = [5, 10, -2, 20, 50, -30, -15, 50, 20, 5];
takeProfit(10000, profits, 10, -20);

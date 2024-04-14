// TopStocks.js
import React from 'react';

const TopStocks = ({ topStocks }) => {
  return (
    <div>
      <h2>Top Stocks Today</h2>
      <ol>
        {topStocks.map((stock, index) => (
          <li key={index}>
            {stock.companyName} ({stock.symbol}) - Profit: {((stock.lastPrice-stock.open)*100/stock.open).toPrecision(3)}%
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TopStocks;

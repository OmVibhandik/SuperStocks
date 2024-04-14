// StockTable.js
import React from 'react';

const StockTable = ({ stocks }) => {
  return (
    <div>
      <h2>List of NSE Stocks</h2>
      <table>
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Symbol</th>
            <th>Last Known Price</th>
            <th>Open Price</th>
            <th>Date/Time of Last Price</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.companyName}</td>
              <td>{stock.symbol}</td>
              <td>{stock.lastPrice}</td>
              <td>{stock.open}</td>
              <td><img id={stock.symbol} 
              src={stock.chart} 
              onError={()=>{
                document.getElementById(stock.symbol)
                .style.display = "none";
              }} 
              alt={stock.symbol}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default StockTable;

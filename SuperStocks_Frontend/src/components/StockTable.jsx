/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import ReactPaginate from "react-paginate"; // for pagination

const StockTable = ({ stocks }) => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(stocks.length / itemsPerPage);

  const handleClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const displayedStocks = stocks.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Stock Name
              </th>
              <th scope="col" class="px-6 py-3">
                Symbol
              </th>
              <th scope="col" class="px-6 py-3">
                Last Known Price
              </th>
              <th scope="col" class="px-6 py-3">
                Open Price
              </th>
              <th scope="col" class="px-6 py-3">
                Price Chart
              </th>
            </tr>
          </thead>

          <tbody>
            {displayedStocks.map((stock, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={startIndex + index}
              >
                <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {stock.companyName}
                </td>
                <td class="px-6 py-4">{stock.symbol}</td>
                <td class="px-6 py-4">{stock.lastPrice}</td>
                <td class="px-6 py-4">{stock.open}</td>
                <td class="px-6 py-4">
                  <img
                    id={stock.symbol}
                    src={stock.chart}
                    onError={() => {
                      document.getElementById(stock.symbol).style.display =
                        'none';
                    }}
                    alt={stock.symbol}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination" class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={handleClick}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          breakLabel={'...'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default StockTable;

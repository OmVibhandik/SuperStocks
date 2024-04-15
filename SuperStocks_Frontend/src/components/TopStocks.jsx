/* eslint-disable react/no-unknown-property */
// TopStocks.js
import React from 'react';

const TopStocks = ({ topStocks }) => {
  return (
    // <div>
    //   <h2>Top Stocks Today</h2>
    //   <ol>
    //     {topStocks.map((stock, index) => (
    //       <li key={index}>
    //         {stock.companyName} ({stock.symbol}) - Profit: {((stock.lastPrice-stock.open)*100/stock.open).toPrecision(3)}%
    //       </li>
    //     ))}
    //   </ol>
    // </div>

    

<div id="crypto-modal"  tabindex="-1" aria-hidden="true" class="flex hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div  class="relative p-4 w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
           
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Top gainers today
                </h3>
                <button onClick={()=>{
                  document.getElementById('crypto-modal').classList.add('hidden');
                }} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crypto-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            
            <div class="p-4 md:p-5">
                <ul class="my-4 space-y-3">
                  {topStocks.map((e)=>(
                    // eslint-disable-next-line react/jsx-key
                    <li>
                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span class="flex-1 ms-3 whitespace-nowrap">{e.symbol}</span>
                        <span class="flex-1 ms-3 whitespace-nowrap">Profit: {((e.lastPrice-e.open)*100/e.open).toPrecision(3)}%</span>
                    </a>
                </li>
                  ))}
                    
                </ul>
            </div>
        </div>
    </div>
</div>


  );
};

export default TopStocks;

// App.js
import React, { useState, useEffect } from 'react';
import StockTable from './components/StockTable';
import SearchBar from './components/SearchBar'
import TopStocks from './components/TopStocks';
import './App.css'


const App = () => {
  const [stocks, setStocks] = useState([]);
  const [topStocks, setTopStocks] = useState([]);

  const dummyStocks = [
    { name: 'Stock 1', symbol: 'STK1', price: 100, lastUpdated: '2024-04-11 09:00:00' },
    { name: 'Stock 2', symbol: 'STK2', price: 1020, lastUpdated: '2024-04-11 09:00:00' },
  ];

  const dummyTopStocks = [
    { name: 'Top Stock 1', symbol: 'TOP1', profit: 50 },
  ];

  const fetchAllStocks=()=>{
    fetch('http://localhost:4001/getAllStocks')
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => console.error('Error fetching stocks:', error));
  }

  const fetchTopGainers=()=>{
    fetch('http://localhost:4001/getTopGainers') 
      .then((response) => response.json())
      .then((data) => {
        setTopStocks(data);
      })
      .catch((error) => console.error('Error fetching stocks:', error));
  }

  const handleSearch = (term) => {
    fetch('http://localhost:4001/search/'+term) 
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => console.error('Error fetching stocks:', error));
  };

  useEffect(() => {
    fetchAllStocks();
    fetchTopGainers();
    
    setStocks(dummyStocks);
    setTopStocks(dummyTopStocks);
  },[])


  return (
    <div>
      {/* <h1></h1> */}
      <SearchBar handleSearch={handleSearch} />
      <StockTable stocks={stocks} />
      <TopStocks topStocks={topStocks} />
    </div>
  );
};

export default App;

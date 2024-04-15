// App.js
import React, { useState, useEffect } from 'react';
import StockTable from './components/StockTable';
import SearchBar from './components/SearchBar'
import TopStocks from './components/TopStocks';
import './App.css'



const App = () => {
  const [stocks, setStocks] = useState([]);
  const [topStocks, setTopStocks] = useState([]);

  const url="https://superstocks.onrender.com";
  
  const dummyStocks = [
    
  ];

  const dummyTopStocks = [
    
  ];

  const fetchAllStocks=()=>{
    fetch(url+'/getAllStocks')
      .then((response) => response.json())
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => console.error('Error fetching stocks:', error));
  }

  const fetchTopGainers=()=>{
    fetch(url+'/getTopGainers') 
      .then((response) => response.json())
      .then((data) => {
        setTopStocks(data);
      })
      .catch((error) => console.error('Error fetching stocks:', error));
  }

  const handleSearch = (term) => {
    fetch(url+'/search/'+term) 
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

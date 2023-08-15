import './index.css';
import { Routes, Route} from 'react-router-dom'

// Components folder
import Nav from './Components/Nav';
import {stocks} from './Components/Data2';
import { useState } from 'react';
// import {data} from './Components/Data'; for API

// Pages folder
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'

// console.log(data()) for API
console.log(stocks)

function App() {

 let[stocksData, setStocksData] = useState(stocks)
 console.log(stocksData + "Stock Data")

// being used to pass the data to another component
  return (
    <>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stock/:symbol" element={<Stock stocks={stocksData} />} />
          {/* stocks:symbol holds 1 stock from dashboard */}
          <Route path="/stocks" element={<Dashboard stocks={stocksData} />} />
          {/* created a stocksData prop out of stocks to import in dashboard*/}
        </Routes>
    </>
  );
}

export default App;



// company name .... price ... change
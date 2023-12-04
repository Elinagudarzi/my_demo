import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React ,{useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import ProductPage from './components/ProductPage';
import Navbar from './components/Navbar';
import Header from './components/header';

function App() {
  useEffect(() => {
    const currentURL = window.location.href;
    console.log(currentURL);
  },[]);

  return (
    <div className="App">
      <Router>
        <Navbar/>        
        <Routes>
          <Route path="/" element={<ProductPage/>}/>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;

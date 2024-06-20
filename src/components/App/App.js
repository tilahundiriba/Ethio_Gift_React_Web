import React from 'react';
import './App.css';
import HomeSection from '../HomeSection/HomeSection';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from '../Others/Services';
import Products from '../Others/Products';
import SignUp from '../Others/SignUp';
function App() {
  return (
    <div >
    <Router>
        <Navbar />
      
        <Routes>
          <Route path='/' exact element={<HomeSection />}/>
          <Route path='/services' exact element={<Services />}/>
          <Route path='/products' exact element={<Products />}/>
          <Route path='/sing-up' exact element={<SignUp />}/>
        </Routes>
    </Router>
        
    
    </div>
  );
}

export default App;

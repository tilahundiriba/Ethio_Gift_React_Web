import React from 'react';
import './App.css';
import HomeSection from '../HomeSection/HomeSection';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from '../Others/Services';
import Products from '../Others/Products';
import SignUp from '../Others/SignUp';
import Human_made from '../Others/Human_made';
import Cultures from '../Others/Cultures';
import Natures from '../Others/Natures';
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
          <Route path='/cultures' exact element={<Cultures />}/>
          <Route path='/man-mades' exact element={<Human_made />}/>
          <Route path='/natures' exact element={<Natures />}/>
        </Routes>
    </Router>
        
    
    </div>
  );
}

export default App;

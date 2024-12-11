import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Climate from './incom/Climate';
import Crop from './incom/Crop';
import Soil from './incom/Soil';
import CreAcc from './logincom/Signin';
import MainPage from './Mainpage';

//firebase


function App() {
  return (
    
   
    <Router>
      <Routes>
        <Route path='/CreAcc' element={<CreAcc />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/soil" element={<Soil />} />
        <Route path="/crop" element={<Crop />} />
        <Route path="/climate" element={<Climate />} />

      </Routes>
      </Router>
      
      
  );
}

export default App;

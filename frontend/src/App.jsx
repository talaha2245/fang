import React from 'react'
import "./App.css";
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Rankings from './components/Pages/Rankings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import dotenv from 'dotenv';
// dotenv.config();


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path="/ranking" element={<Rankings/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App;
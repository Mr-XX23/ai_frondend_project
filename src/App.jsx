import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Page from './page';
import Search from './Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/dashboard" element={<Search />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App



{/* <main>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <div className="app">
        <Page/>
      </div>
    </main> */}
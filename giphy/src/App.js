/*
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage'
import Menu from './components/Menu'
import LoginPage from './components/LoginPage'
import SearchPage from './components/SearchPage'
import FavoritesPage from './components/FavoritesPage'

 function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage />} /> 
      </Routes>
    </Router>
  )
};

export default App;
*/

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from './components/HomePage'
import Menu from './components/Menu'
import LoginPage from './components/LoginPage'
import SearchPage from './components/SearchPage'
import FavoritesPage from './components/FavoritesPage'

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/favorites' element={<FavoritesPage />} /> 
      </Routes>
    </Router>
  )
};

export default App;


import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
import Author from './pages/Author';
import FavouriteAuthor from './pages/FavouriteAuthor';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to="author" />} />
          <Route path='/author' element={<Author/>} />
          <Route path='/favourite-author' element={<FavouriteAuthor/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DogsCatalog from './pages/DogsCatalog';
import DogsProfile from './pages/DogsProfile'; // Ensure correct naming
import './App.css';

function App() {
  return (
    <div style={{ height: '100%', margin: 0, padding: 0 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<DogsCatalog />} />
        <Route path="/dogs/:id" element={<DogsProfile />} />
      </Routes>
    </div>
  );
}

export default App;

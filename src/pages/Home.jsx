// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container"> 
      <h1 id='TitleText'>DOGGY DAYCARE</h1>
      <div className="button-container">
        <div className="button-row">
          <button className="btn">Account</button>
          <button className="btn">
          <Link to="/dogs" style={{ textDecoration: 'none', color: 'inherit' }}>Catalog</Link> {/* Correct path */}
          </button>
        </div>
        <div className="button-row">
          <button className="btn">Settings</button>
          <button className="btn">Booking</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

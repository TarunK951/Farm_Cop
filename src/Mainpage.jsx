import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'; // Import the modified CSS
import Profile from './logincom/Account';

function Mainpage() {
  return (
    <div className="container">
      <header>

        {/* Centered header content */}

        <div className="header-content">
          <h1>Farm Cop</h1>
          <p>A Place Made for Farmers</p>
        </div>

        {/* Profile section on the right */}

        <div className="profile">
          <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Profile Icon" className="profile-icon" />
          <Profile />
        </div>
      </header>

      <div className="main-content">
        <div className="card">
          {/* Updated Soil Icon */}
          <img src="https://cdn-icons-png.flaticon.com/512/6634/6634686.png" alt="Soil Analysis Icon" />
          <h2>Soil Test</h2>
          <Link to="/soil">
            <button type="button">Check Soil</button>
          </Link>
        </div>
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/841/841465.png" alt="Crop Icon" />
          <h2>Crop Production</h2>
          <Link to="/crop">
            <button type="button">Explore Crops</button>
          </Link>
        </div>
        <div className="card">
          {/* Climate Icon */}
          <img src="https://cdn-icons-png.flaticon.com/512/1163/1163624.png" alt="Climate Icon" />
          <h2>Climate Changes</h2>
          <Link to="/climate">
            <button type="button">Check Climate</button>
          </Link>
        </div>
      </div>

      <footer>
        <p>© 2024 Farm Cop - A Modern Solution for Farmers</p>
      </footer>

    </div>
  );
}

export default Mainpage;

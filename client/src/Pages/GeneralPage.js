import React from 'react';
import { Link } from 'react-router-dom';
import './GeneralPage.css'; // Import the CSS file for styling

const GeneralPage = () => {
  return (
    <div className="general-page">
      <h1>Welcome to General Page</h1>
      <div className="button-container">
        <Link to="/signin" className="button">Sign In</Link>
        <Link to="/signup" className="button">Sign Up</Link>
      </div>
    </div>
  );
};

export default GeneralPage;

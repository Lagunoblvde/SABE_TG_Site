import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import Sidebar from './Sidebar';
import logo from '../assets/Header/sabe_logo.png';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isDimmed, setDimmed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setDimmed(!isDimmed);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setDimmed(false);
  };

  return (
    <>
      <header className={`header ${isDimmed ? 'dimmed' : ''}`}>
        <div className="menu-icon" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="cart-icon">
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      {isDimmed && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
};

export default Header;

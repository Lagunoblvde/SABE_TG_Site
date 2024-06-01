import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="menu-section top-section">
          <ul>
            <li><Link to="/" onClick={onClose}>Главная</Link></li>
            <li><Link to="/order" onClick={onClose}>Сделать заказ</Link></li>
            <li><Link to="/brands" onClick={onClose}>Бренды</Link></li>
          </ul>
        </div>
        <div className="menu-section bottom-section">
          <ul>
            <li><Link to="/reviews" onClick={onClose}>Отзывы</Link></li>
            <li><Link to="/support" onClick={onClose}>Поддержка</Link></li>
            <li><Link to="/about" onClick={onClose}>О нас</Link></li>
          </ul>
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;

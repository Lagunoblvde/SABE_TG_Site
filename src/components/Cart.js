import React from 'react';
import '../Styles/Cart.css';
import cartImage from '../assets/Cart/cart.png'; // Убедитесь, что вы добавили изображение в папку assets

const Cart = () => {
  return (
    <div className="cart-container">
      <img src={cartImage} alt="Empty Cart" className="cart-image" />
      <p className="cart-message">Корзина пуста, Добавьте товары в корзину</p>
    </div>
  );
};

export default Cart;

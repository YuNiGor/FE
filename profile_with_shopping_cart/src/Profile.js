import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import ProductSearch from './components/ProductSearch';
import CartAndCheckout from './components/CartAndCheckout';

function Profile() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/profile/personal-info">Личная информация</Link>
          </li>
          <li>
            <Link to="/profile/product-search">Поиск товаров</Link>
          </li>
          <li>
            <Link to="/profile/cart-and-checkout">Корзина и оформление</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="personal-info" element={<UserProfile />} />
        <Route path="product-search" element={<ProductSearch />} />
        <Route path="cart-and-checkout" element={<CartAndCheckout />} />
        <Route path="*" element={<Navigate to="/profile/personal-info" />} />
      </Routes>
    </div>
  );
}

export default Profile;

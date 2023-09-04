import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Profile from './Profile';
import './App.css';
import LoginForm from './LoginForm';
import UserProfile from './components/UserProfile';
import ProductSearch from './components/ProductSearch';
import CartAndCheckout from './components/CartAndCheckout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUserData(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
  };

  return (
    <div className="App">
            <h1>{isLoggedIn ? 'Личный кабинет' : 'Авторизация'}</h1>
      <Router>
        {isLoggedIn ? (
          <>
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
            <button onClick={handleLogout}>Выйти</button>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/personal-info" element={<UserProfile userData={userData} />} />
              <Route path="/profile/product-search" element={<ProductSearch />} />
              <Route path="/profile/cart-and-checkout" element={<CartAndCheckout />} />
            </Routes>
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </Router>
    </div>
  );
}

export default App;

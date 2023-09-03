import React, { useState } from 'react';

function NavigationMenu() {
  const [menuState, setMenuState] = useState({
    home: false,
    about: false,
    services: false,
  });

  const handleMenuItemClick = (menuItem) => {
    const updatedMenuState = { ...menuState };

    updatedMenuState[menuItem] = !updatedMenuState[menuItem];

    for (const key in updatedMenuState) {
      if (key !== menuItem) {
        updatedMenuState[key] = false;
      }
    }

    setMenuState(updatedMenuState);
  };

  return (
    <div className="navigation-menu">
      <ul>
        <li
          className={menuState.home ? 'active' : ''}
          onClick={() => handleMenuItemClick('home')}
        >
          Главная
        </li>
        <li
          className={menuState.about ? 'active' : ''}
          onClick={() => handleMenuItemClick('about')}
        >
          О нас
        </li>
        <li
          className={menuState.services ? 'active' : ''}
          onClick={() => handleMenuItemClick('services')}
        >
          Услуги
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;

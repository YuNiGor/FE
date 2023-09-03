import React, { useState } from 'react';

function MenuItem2() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <h2>Меню 2</h2>
      <p>Состояние: {isActive ? 'Активно' : 'Не активно'}</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Выключить' : 'Включить'}
      </button>
    </div>
  );
}

export default MenuItem2;
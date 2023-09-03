import React, { useState } from 'react';

function MenuItem3() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div>
      <h2>Меню 3</h2>
      <p>Состояние: {isActive ? 'Активно' : 'Не активно'}</p>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Выключить' : 'Включить'}
      </button>
    </div>
  );
}

export default MenuItem3;
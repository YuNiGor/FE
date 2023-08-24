import React, { useState } from 'react';

function InputWithLocalStorageAndClickCoordinates() {
  const [inputValue, setInputValue] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  const handleMouseEnter = () => {
    localStorage.setItem('inputValue', inputValue);
  };

  const handleClick = (event) => {
    const { clientX, clientY } = event;
    const newCoordinate = { x: clientX, y: clientY };

    setCoordinates((prevCoordinates) => [...prevCoordinates, newCoordinate]);
    localStorage.setItem(
      'coordinates',
      JSON.stringify([...coordinates, newCoordinate])
    );
  };

  

  return (
    <div className="input-coordinates-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onMouseEnter={handleMouseEnter}
      />
      <p>Сохраненное значение: {inputValue}</p>

      <div className="coordinates-container" onClick={handleClick}>
        <p>Click anywhere to save coordinates.</p>
        <ul>
          {coordinates.map((coordinate, index) => (
            <li key={index}>X: {coordinate.x}, Y: {coordinate.y}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InputWithLocalStorageAndClickCoordinates;



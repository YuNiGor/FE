import React from 'react';
import './ErrorModal.css';

function ErrorModal({ message, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Ошибка</h2>
        <p>{message}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default ErrorModal;

import React from 'react';

function ConfirmModal({ isOpen, message, onConfirm, onCancel }) {
  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <p className="modal-message">{message}</p>
          <div className="modal-buttons">
            <button className="confirm-button" onClick={onConfirm}>Confirm</button>
            <button className="cancel-button" onClick={onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default ConfirmModal;

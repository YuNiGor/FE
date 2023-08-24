import React, { useState } from 'react';
import InputWithLocalStorageAndClickCoordinates from './components/InputWithLocalStorageAndClickCoordinates';
import TodoList from './components/TodoList';
import UserFormPopup from './components/UserFormPopup';
import ConfirmModal from './components/ConfirmModal';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  

  const handleConfirm = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
    setShowConfirmModal(false);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };



  return (
    <div className="App">
      <h1>Combined App</h1>
      <InputWithLocalStorageAndClickCoordinates />
      <TodoList todos={todos} />
      <UserFormPopup />



      <ConfirmModal
        isOpen={showConfirmModal}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default App;

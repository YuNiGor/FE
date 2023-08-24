import React, { useState } from 'react';
import ConfirmModal from '../ConfirmModal';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      setModalMessage('Заполните все поля');
      setShowConfirmModal(true);
      return;
    }

    setModalMessage('Вы уверены, что хотите добавить задачу?');
    setShowConfirmModal(true);
  };

  const handleConfirm = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
    setShowConfirmModal(false);
  };

  const handleCancel = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className="todos-container">
      <h2>Todo List:</h2>
      <input
        type="text"
        placeholder="Введите новую задачу"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
      />
      <button onClick={handleAddTodo}>Добавить</button>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ol>
      <ConfirmModal
        isOpen={showConfirmModal}
        message={modalMessage}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default TodoList;

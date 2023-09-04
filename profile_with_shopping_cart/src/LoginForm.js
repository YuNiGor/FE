import React, { useState } from 'react';
import ErrorModal from './ErrorModal';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?username=${username}&email=${email}`
      );

      if (response.ok) {
        const userData = await response.json();
        if (userData.length === 1) {
          onLogin(userData[0]);
        } else {
          setShowError(true);
        }
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    }
  };

  const handleCloseError = () => {
    setShowError(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Имя пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Войти</button>
      {showError && (
        <ErrorModal
          message="Некорректные данные для входа. Пожалуйста, проверьте имя пользователя и email."
          onClose={handleCloseError}
        />
      )}
    </div>
  );
}

export default LoginForm;

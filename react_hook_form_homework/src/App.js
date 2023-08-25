import React from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>-=React Hook Form=-</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            {...register('firstName', { required: true, minLength: 2 })}
          />
          {errors.firstName?.type === 'required' && <span className="error">Это поле обязательно</span>}
          {errors.firstName?.type === 'minLength' && <span className="error">Минимум 2 символа</span>}
        </div>

        <div>
          <label>Фамилия:</label>
          <input
            type="text"
            {...register('lastName', { required: true, minLength: 2 })}
          />
          {errors.lastName?.type === 'required' && <span className="error">Это поле обязательно</span>}
          {errors.lastName?.type === 'minLength' && <span className="error">Минимум 2 символа</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === 'required' && <span className="error">Введите email</span>}
          {errors.email?.type === 'pattern' && <span className="error">Введите корректный email</span>}
        </div>

        <div>
          <label>Пароль:</label>
          <input
            type="password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password?.type === 'required' && <span className="error">Введите пароль</span>}
          {errors.password?.type === 'minLength' && <span className="error">Минимум 6 символов</span>}
        </div>

        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;

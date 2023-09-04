import React from 'react';

function PersonalInfo({ userData }) {
  return (
    <div className="user-profile">
      <h2>Личная информация</h2>
      <ul>
        <li>Имя: {userData.name}</li>
        <li>Имя пользователя: {userData.username}</li>
        <li>Email: {userData.email}</li>
        <li>Телефон: {userData.phone}</li>
      </ul>
    </div>
  );
}

export default PersonalInfo;

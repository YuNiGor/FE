import React, { useState } from 'react';

function UserProfile({ userData, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editedUserData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedUserData(userData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({
      ...editedUserData,
      [name]: value,
    });
  };

  return (
    <div className="user-profile">
      <h2>Личная информация</h2>
      {isEditing ? (
        <div>
          <div>
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedUserData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="username">Имя пользователя:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={editedUserData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUserData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Телефон:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={editedUserData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="street">Улица:</label>
            <input
              type="text"
              id="street"
              name="address.street"
              value={editedUserData.address.street}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="suite">Апартамент:</label>
            <input
              type="text"
              id="suite"
              name="address.suite"
              value={editedUserData.address.suite}
              onChange={handleInputChange}
            />
          </div>
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={handleCancel}>Отмена</button>
        </div>
      ) : (
        <div>
          <ul>
            <li>Имя: {userData.name}</li>
            <li>Имя пользователя: {userData.username}</li>
            <li>Email: {userData.email}</li>
            <li>Телефон: {userData.phone}</li>
            <li>
              Адрес: {userData.address.street}, {userData.address.suite},{' '}
              {userData.address.city} ({userData.address.zipcode})
            </li>
            <li>
              Координаты: Широта - {userData.address.geo.lat}, Долгота -{' '}
              {userData.address.geo.lng}
            </li>
            <li>Веб-сайт: {userData.website}</li>
            <li>Компания: {userData.company.name}</li>
            <li>Фраза: {userData.company.catchPhrase}</li>
            <li>Бизнес: {userData.company.bs}</li>
          </ul>
          <button onClick={handleEdit}>Редактировать</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;

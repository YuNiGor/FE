import React from "react";

export default function TodoItem({ id, title, completed, createdAt, onDelete }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
      </label>
      <span>{title}</span>
      <span className="createdAt"> - {createdAt}</span> {/* Добавляем отступ перед датой */}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

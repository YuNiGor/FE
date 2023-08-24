import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          createdAt={todo.createdAt}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

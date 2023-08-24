import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  const [TodoTitle, setTodoTitle] = useState("");

  const addTodo = (event) => {
    if (event.key === "Enter" && TodoTitle) {
      const newTodo = {
        id: Math.random(),
        title: TodoTitle,
        completed: false,
        createdAt: new Date().toLocaleString(),
      };

      setTodos([...todos, newTodo]);
      setTodoTitle("");
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <h1>Todo app</h1>
      <div>
        <input
          type="text"
          value={TodoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyDown={addTodo}
        />
        <label>Todo name</label>
      </div>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;



//Добавить время и дату к todo//
//Добавить вместо точки списка айдишник//
import React, { useState } from "react";

export default function TodoList({ todos, setTodo, todo }) {
  const [update, setUpdate] = useState("");
  const handleUpdate = () => {
    setTodo(
      todo.map((el) => {
        if (el.id === todos.id) {
          return { ...el, text: update };
        }
        return el;
      })
    );
    setUpdate("");
  };
  const handleDelete = () => {
    setTodo(todo.filter((el) => el.id !== todos.id));
  };
  const handleCompleted = () => {
    setTodo(
      todo.map((el) => {
        if (el.id === todos.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  return (
    <div>
      <li>
        <h1 className={todos.completed ? "line" : null}>
          <input
            type="checkbox"
            checked={todos.completed}
            onChange={handleCompleted}
          />
          {todos.text}
        </h1>
      </li>

      <button onClick={handleDelete}>Delete</button>
      <div>
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
        />
        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
}

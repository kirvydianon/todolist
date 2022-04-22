import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [query, setQuery] = useState("");

  return (
    <div>
      <h1>Kirv's Todo List</h1>
      <div>
        <Form
          key={todo.id}
          todo={todo}
          setTodo={setTodo}
          query={query}
          setQuery={setQuery}
        />
      </div>
      <div>
        <ul>
          {todo.map((todos) => {
            return (
              <TodoList
                key={todos.id}
                todos={todos}
                setTodo={setTodo}
                todo={todo}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

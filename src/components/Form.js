import React from "react";

export default function Form({ todo, query, setTodo, setQuery }) {
  const handleButton = (e) => {
    e.preventDefault();
    setTodo([
      ...todo,
      { id: Math.random() * 1000, completed: false, text: query },
    ]);
    setQuery("");
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" onClick={handleButton}>
        Enter
      </button>
    </form>
  );
}

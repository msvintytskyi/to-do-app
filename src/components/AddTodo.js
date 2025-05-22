import { useState } from "react";

function AddTodo({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) {
      addTodo(trimmed);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a task…"
        aria-label="Add a task…"
      />
      <button type="submit" aria-label="Add todo">+</button>
    </form>
  );
}

export default AddTodo;

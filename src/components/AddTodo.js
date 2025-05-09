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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
        aria-label="Add a task"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;

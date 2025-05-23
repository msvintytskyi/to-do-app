import { useState } from "react";

function EditTodoModal({ todo, onSave, onCancel }) {
const [input, setInput] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) {
      onSave(todo.id, trimmed);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Edit Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Edit a task…"
            aria-label="Edit a task…"
          />
          <div className="modal-actions">
            <button type="submit" aria-label="submit edited todo">Save</button>
            <button type="button" onClick={onCancel} aria-label="cancel editing of todo">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTodoModal;

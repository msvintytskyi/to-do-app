function TodoItem({ todo, onDeleteTodo, onEditTodo }) {
  return (
    <li>
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onEditTodo(todo)} className="edit-button" aria-label="Edit todo">✎</button>
      <button onClick={() => onDeleteTodo(todo.id)} className="delete-button" aria-label="Delete todo">x</button>
    </li>
  );
}

export default TodoItem;

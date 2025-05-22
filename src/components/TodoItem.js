function TodoItem({ todo, onDeleteTodo }) {
  return (
    <li>
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onDeleteTodo(todo.id)} aria-label="Delete todo">x</button>
    </li>
  );
}

export default TodoItem;

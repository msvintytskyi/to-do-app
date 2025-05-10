function TodoItem({ todo, onDeleteTodo }) {
  return (
    <>
      <li>{todo.text}</li>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}

export default TodoItem;

function TodoItem({ todo, handleDeleteTodo }) {
  return (
    <>
      <li>{todo.text}</li>
      <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
    </>
  );
}

export default TodoItem;

function TodoList({ todos }) {
  const todosList = todos.map((todo) => {
    return (
      <li key={todo.id}>
        {todo.text}
      </li>
    );
  });

  return (
    <div className="todo-list">
      {todosList}
    </div>
  );
}

export default TodoList;
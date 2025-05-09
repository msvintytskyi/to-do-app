import TodoItem from "./TodoItem";

function TodoList({ todos, handleDeleteTodo }) {
  const todosList = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
    );
  });

  return (
    <div className="todo-list">
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;

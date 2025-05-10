import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo }) {
  const todosList = todos.map((todo) => {
    return (
      <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
    );
  });

  return (
    <div className="todo-list">
      <ul>{todosList}</ul>
    </div>
  );
}

export default TodoList;

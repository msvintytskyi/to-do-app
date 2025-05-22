import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo }) {
  const todosList = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />;
  });

  return <ul className="todo-list">{todosList}</ul>;
}

export default TodoList;

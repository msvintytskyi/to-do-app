import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo, onEditTodo }) {
  const todosList = todos.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onDeleteTodo={onDeleteTodo}
        onEditTodo={onEditTodo}
      />
    );
  });

  return <ul className="todo-list">{todosList}</ul>;
}

export default TodoList;

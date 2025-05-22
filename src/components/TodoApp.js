import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || [];
  });
  const [nextId, setNextId] = useState(() => {
    const savedNextId = JSON.parse(localStorage.getItem("nextId"));
    return savedNextId || 1;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("nextId", JSON.stringify(nextId));
  }, [todos, nextId]);

  const handleAddTodo = (todo) => {
    const newTodo = { id: nextId, text: todo };
    setTodos([...todos, newTodo]);
    setNextId(nextId + 1);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo addTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default TodoApp;

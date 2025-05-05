import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function TodoApp() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "MasterTodo",
    },
  ]);

  return (
    <div>
      <h1>TodoApp</h1>
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;

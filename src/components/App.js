import React from "react";
import { useSelector } from "react-redux";
import ToDoList from "./TodoList";
import TodoTemplate from "./TodoTemplate";
import ToDoTextInput from "./TodoTextInput";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <TodoTemplate>
      <ToDoTextInput isNew={true} />
      <ToDoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;

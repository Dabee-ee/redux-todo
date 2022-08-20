import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";

function App() {
  const todos = useSelector((state) => state.todos.todoList);
  console.log(todos);
  return (
    <>
      <Header />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import ToDoList from "./ToDoList";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <Header />
      <ToDoList todos={todos} />
    </>
  );
}

export default App;

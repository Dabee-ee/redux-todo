import React from "react";
import ToDoItem from "./ToDoItem";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} />
    ))}
  </ul>
);

export default TodoList;

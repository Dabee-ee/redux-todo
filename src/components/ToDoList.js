import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => (
  <div className="TodoList">
    {todos && todos.map((todo) => <TodoListItem todo={todo} key={todo.id} />)}
  </div>
);

export default React.memo(TodoList);

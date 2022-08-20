import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../actions/todo_actions";

const ToDoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDeleteToDo = () => {
    dispatch(deleteToDo(todo.id));
  };
  return (
    <li>
      <input type="checkbox"></input>
      <span>{todo.text}</span>
      <button onClick={handleDeleteToDo}>Delete</button>
    </li>
  );
};

export default ToDoItem;

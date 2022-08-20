import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, editToDo } from "../actions/todo_actions";
import ToDoTextInput from "./ToDoTextInput";

const ToDoItem = ({ todo }) => {
  const [newToDo, setNewToDo] = useState();
  const [editing, setEditing] = useState(false);

  const dispatch = useDispatch();
  const handleDeleteToDo = () => {
    dispatch(deleteToDo(todo.id));
  };

  const handleDoubleClick = () => {
    setEditing(true);
    console.log(editing);
  };
  const handleBlur = () => {
    setEditing(false);
  };
  const onSave = () => {
    setEditing(false);
  };
  return (
    <>
      {editing ? (
        <li>
          <input type="checkbox" />
          <ToDoTextInput todo={todo} handleBlur={handleBlur} onSave={onSave} />
          <button onClick={handleDeleteToDo}>Delete</button>
        </li>
      ) : (
        <li>
          <input type="checkbox" />
          <label onDoubleClick={handleDoubleClick}>{todo.text}</label>
          <button onClick={handleDeleteToDo}>Delete</button>
        </li>
      )}
    </>
  );
};

export default ToDoItem;

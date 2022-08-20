import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, editToDo } from "../actions/todo_actions";

const ToDoTextInput = ({ todo, handleBlur, isNew, onSave }) => {
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState(todo?.text || "");

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newToDo);
    if (isNew) {
      dispatch(addToDo(newToDo));
      setNewToDo("");
    } else {
      dispatch(editToDo(todo?.id, newToDo));
      onSave();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={newToDo}
        onChange={handleChange}
        autoFocus={true}
        onBlur={handleBlur}
      />
    </form>
  );
};

export default ToDoTextInput;

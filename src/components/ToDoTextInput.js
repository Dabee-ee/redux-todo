import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../actions/todo_actions";

const ToDoTextInput = () => {
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState("");

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setNewToDo(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    console.log(newToDo);
    dispatch(addToDo(newToDo));
    setNewToDo("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={newToDo}
        onChange={handleChange}
        autoFocus={true}
      />
    </form>
  );
};

export default ToDoTextInput;

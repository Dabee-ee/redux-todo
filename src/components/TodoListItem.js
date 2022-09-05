import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { completeToDo, deleteToDo } from "../actions/todo_actions";
import ToDoTextInput from "./TodoTextInput";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo }) => {
  const { id, text, completed } = todo;

  const dispatch = useDispatch();
  const handleDeleteToDo = useCallback((id) => {
    dispatch(deleteToDo(id));
  }, []);

  const handleCompoleteTodo = useCallback((id) => {
    dispatch(completeToDo(id));
  }, []);

  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { completed })}
        onClick={() => handleCompoleteTodo(id)}
      >
        {completed ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => handleDeleteToDo(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);

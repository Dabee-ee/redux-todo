import { ADD_TODO, DELETE_TODO, EDIT_TODO, COMPLETE_TODO } from "./types";

export const addToDo = (text) => ({ type: ADD_TODO, text });
export const deleteToDo = (id) => ({ type: DELETE_TODO, id });
export const editToDo = (id, text) => ({ type: EDIT_TODO, id, text });
export const completeToDo = (id) => ({ type: COMPLETE_TODO, id });

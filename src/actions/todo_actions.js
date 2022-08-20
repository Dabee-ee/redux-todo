import { ADD_TODO, DELETE_TODO } from "./types";

export const addToDo = (text) => ({ type: ADD_TODO, text });
export const deleteToDo = (id) => ({ type: DELETE_TODO, id });

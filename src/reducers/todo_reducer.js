import { ADD_TODO } from "../actions/types";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todoList: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { text: action.payload, completed: false, id: uuidv4() },
        ],
      };
    default:
      return state;
  }
};

export default todoReducer;

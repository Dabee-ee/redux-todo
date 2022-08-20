import { ADD_TODO, DELETE_TODO } from "../actions/types";
import { v4 as uuidv4 } from "uuid";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
          id: uuidv4(),
        },
      ];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todoReducer;

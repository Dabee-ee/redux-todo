import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
} from "../actions/types";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: 1,
    text: "리덕스 기초 알아보기",
    completed: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링",
    completed: true,
  },
  {
    id: 3,
    text: "성능 최적화",
    completed: false,
  },
];

const todoReducer = (state = initialState, action) => {
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
    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todoReducer;

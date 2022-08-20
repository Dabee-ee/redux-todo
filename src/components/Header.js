import React from "react";
import ToDoTextInput from "./ToDoTextInput";

const Header = () => (
  <header className="header">
    <h1>To Do List</h1>
    <ToDoTextInput isNew={true} />
  </header>
);

export default Header;

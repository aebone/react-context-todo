/** @format */

import React from "react";
import TodoProvider from "./context/todoContext";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Todo List</h1>
        <hr />
        <AddTodo />
        <hr />
        <Todos />
        <hr />
        <img src="construction.gif" alt="Under construction forever" />
      </div>
    </TodoProvider>
  );
}

export default App;

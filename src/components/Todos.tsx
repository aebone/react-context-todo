/** @format */

import React from "react";
import { TodoContext } from "../context/todoContext";
import Todo from "../components/Todo";

const Todos = () => {
  const { todos, updateTodo } = React.useContext(TodoContext);
  return (
    <>
      {todos.map((todo: any) => (
        <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
      ))}
    </>
  );
};

export default Todos;

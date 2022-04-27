/** @format */

import * as React from "react";

const Todo: React.FC<any> = ({ todo, updateTodo }) => {
  const checkTodo: string = todo.status ? "line-through" : "";
  return (
    <div>
      <h1 className={checkTodo}>{todo.title}</h1>
      <span className={checkTodo}>{todo.description}</span>
      <button
        onClick={() => updateTodo(todo.id)}
        className={todo.status ? "hide-button" : "show-button"}
      >
        Complete
      </button>
    </div>
  );
};

export default Todo;

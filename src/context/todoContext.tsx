/** @format */

import * as React from "react";

export const TodoContext = React.createContext<any>(null);

const TodoProvider: React.FC<any> = ({ children }) => {
  const [todos, setTodos] = React.useState<any[]>([
    {
      id: 1,
      title: "todo 1",
      description: "this is a description...",
      status: false,
    },
    {
      id: 2,
      title: "todo 2",
      description: "this is a description...",
      status: true,
    },
  ]);

  const saveTodo = (todo: any) => {
    const newTodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {
    todos.filter((todo: any) => {
      if (todo.id === id) {
        todo.status = true;
        setTodos([...todos]);
      }
    });
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

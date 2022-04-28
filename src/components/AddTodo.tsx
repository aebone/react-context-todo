/** @format */

import React from "react";
import { TodoContext } from "../context/todoContext";

const AddTodo: React.FC = () => {
  const { saveTodo } = React.useContext(TodoContext);
  const [formData, setFormData] = React.useState<any>();
  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };
  const handleSaveTodo = (e: React.FormEvent, formData: any) => {
    e.preventDefault();
    saveTodo(formData);
  };
  return (
    <form className="form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div className="input-row">
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div className="input-row">
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};

export default AddTodo;

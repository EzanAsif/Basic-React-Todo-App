import React, { useState, useContext } from "react";
import { GlobalContext, GlobalProvider } from "../Config/Context";

export const TodoInput = () => {
  const [Todo, setTodo] = useState("");

  const { addTodo, todos } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100000000),
      description: Todo,
    };

    addTodo(newTodo);
  };

  console.log(todos);

  return (
    <div className="input-todo-form">
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Enter Todo"
        />
        <button>+</button>
      </form>
    </div>
  );
};

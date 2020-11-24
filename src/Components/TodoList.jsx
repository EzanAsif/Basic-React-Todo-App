import React, {useContext} from "react";
import { Todo } from "./Todo";
import { GlobalContext} from '../Config/Context'

export const TodoList = () => {
  
  let { todos } = useContext(GlobalContext)

  return (
    <>
      <ul className="Todo-list">
        {todos.map((value, index) => (
          <Todo key={value.id} value={value} id = {index+1}/>
        ))}
      </ul>
    </>
  );
};

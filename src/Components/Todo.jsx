import React, {useContext} from "react";
import {GlobalContext} from '../Config/Context'

export const Todo = ({ value }) => {
  // console.log(todo.id, todo.description);

  const {deleteTodo} = useContext(GlobalContext)


  return (
    <li className="todo">
      <div>
        <h4 className="desc">{value.description}</h4>
      </div>
      <button onClick = { () => deleteTodo(value.id)}>X</button>
    </li>
  );
};

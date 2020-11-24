import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

let initialState = {
  todos: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  //actions

  function deleteTodo(id){
    dispatch({
      type : "DELETE_TODO",
      payload : id
    });
  }


  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        addTodo,
        deleteTodo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

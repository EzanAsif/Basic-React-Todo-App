import React, {useContext} from 'react'

import { Header } from "./Components/Header";
import { TodoInput } from "./Components/TodoInput";
import {TodoList} from './Components/TodoList'

import {GlobalProvider} from './Config/Context'

import "./App.css";

function App() {
  return (
    <GlobalProvider className="App">
      <Header />
      <div className="Content">
        <TodoInput />
        <TodoList />
      </div>
    </GlobalProvider>
  );
}

export default App;

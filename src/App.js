import React, { useState } from "react";
import Header from "./components/Header.js";
import Lists from './components/Lists'
import Todos from "./components/Todos";
import { AiOutlineMenu} from "react-icons/ai";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([{id: 1, title: 'Todo', description: 'Info', complete: false}]);
  return (
    <div className="App">
      <Header />
      <AiOutlineMenu></AiOutlineMenu>
      <input type="text" />
      <button>Add Todo</button>
      <Lists todos={todos} />
    </div>
  );
}

export default App;

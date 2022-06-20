import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles"

import Header from "./components/Header"
import { Paper, Box } from "@mui/material";
import TodoForm from "./components/TodoForm";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [todos, setTodos] = useState([{id: 1, title: 'Todo', description: 'Info', complete: false}]);
  const OnTodoSubmit = (id, name, description, complete) => {
    const newTodo = {};
    newTodo["id"] = id;
     newTodo["title"] = name;
      newTodo["description"] = description;
       newTodo["complete"] = complete;
    setTodos(oldTodos => [...oldTodos, newTodo]);
    console.table(todos);
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header/>
        <TodoForm onClick={OnTodoSubmit} />
      </Box>
    </ThemeProvider>

  );
}

export default App;

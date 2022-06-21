import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import { Paper, Box } from "@mui/material";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const [todos, setTodos] = useState([
    { title: "Todo", description: "Info", complete: false },
  ]);
  const OnTodoSubmit = (title, description, complete) => {
      const newTodo = {};
      newTodo["title"] = title;
      newTodo["description"] = description;
      newTodo["complete"] = complete;
      setTodos((oldTodos) => [...oldTodos, newTodo]);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header />
        <TodoForm todos={todos} onClick={OnTodoSubmit} />
      </Box>
      <Todos todos={todos} />
    </ThemeProvider>
  );
}

export default App;

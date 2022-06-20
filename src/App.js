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
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Header/>
        <TodoForm/>
      </Box>
    </ThemeProvider>

  );
}

export default App;

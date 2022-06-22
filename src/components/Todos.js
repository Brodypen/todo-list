import React from "react";
import { Stack, Paper } from "@mui/material";
import Todo from "./Todo";
/* Todos are the individals tasks you have to do*/

const Todos = ({ todos }) => {
  return (
    <Stack
      bgcolor={""}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {console.table(todos)}
      {todos.map((todo) => (
          <Paper>
            <Todo
              title={todo.title}
              description={todo.description}
              complete={todo.complete}
              key={"" + todo.title}
            />
          </Paper>
      ))}
    </Stack>
  );
};

export default Todos;

import React from "react";
import { Typography, Checkbox, Stack, IconButton, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
/* Todos are the individals tasks you have to do*/

const Todos = ({ todos, deleteTodo }) => {

  return (
    <Stack
      bgcolor={""}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      {todos.map((todo) => (
        <Paper key={todo.title}>
          <Stack
            bgcolor={"grey"}
            direction="row"
            alignItems="center"
            spacing={3}
          >
            <Checkbox />
            <Typography variant="h4">{todo.title}</Typography>
            <IconButton aria-label="Inspect">
              <ManageSearchIcon />
            </IconButton>
            <IconButton aria-label="DeleteIcon" onClick={() => deleteTodo(todo.title)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};

export default Todos;

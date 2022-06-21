import React from "react";
import PropTypes from "prop-types";
import { Stack, Box, Typography } from "@mui/material";
/* Todos are the individals tasks you have to do*/


const Todos = ({ todos }) => {
  return (
    <Stack spacing={2}>
      {console.table(todos)}
      {todos.map((todo) => (
        <Typography key={'' + todo.title + todo.description + todo.complete}
          bgcolor={'green'}
          color={"text.primary"}
        >
          {todo.title}
        </Typography>
      ))}
    </Stack>
  );
};

export default Todos;

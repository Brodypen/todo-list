import React from "react";
import { Typography, Checkbox, Stack, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
const Todo = ({
  title,
  description,
  complete,
  key,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <Stack bgcolor={"grey"} direction="row" alignItems="center" spacing={4}>
      <Checkbox />
      <Typography variant="h4">{title}</Typography>
      <IconButton aria-label="Inspect">
        <ManageSearchIcon />
      </IconButton>
      <IconButton aria-label="DeleteIcon">
        <DeleteIcon />
      </IconButton>
    </Stack>
  );
};

export default Todo;

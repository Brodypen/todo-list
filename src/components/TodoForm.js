import React, { useState, useId } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
const TodoForm = ({ onClick, todos }) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [complete, setComplete] = React.useState(false);
  const [errorText, setErrorText] = React.useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || todos.findIndex((item) => item.title === title) !== -1) {
      setErrorText("Error!");
      
    }
    else {
    setErrorText("");
    handleClose();
    onClick(title, desc, complete);
  }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <TextField
         
            error={errorText !== ""}
            helperText={errorText === "" ? "" : "Task with same name"}
            id="title"
            label="Title"
            variant="filled"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="Description"
            label="Description"
            variant="filled"
            onChange={(e) => setDesc(e.target.value)}
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
              label="Complete?"
              color="secondary"
              onChange={(e) =>
                e.target.value === "on" ? setComplete(true) : setComplete(false)
              }
            ></FormControlLabel>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleSubmit()}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;

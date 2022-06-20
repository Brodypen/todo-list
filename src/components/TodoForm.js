import React, {useState, useId} from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
const TodoForm = ({ onClick }) => {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [complete, setComplete] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const id = useId();

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Task</DialogTitle>
        <DialogContent>
          <TextField
            id="name"
            label="Name"
            variant="filled"
            onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => e.target.value === 'on' ? setComplete(true) : setComplete(false)}
            ></FormControlLabel>
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClick(id, name, desc, complete)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;

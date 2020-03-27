import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import VocabForm from "./VocabForm";

const useStyles = makeStyles(theme => ({
  formRoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch"
    }
  },
  fab: {
    background: "#847dff",
    color: "white",
    "&:hover": { background: "#6C63FF" }
  },
  lightText: {
    color: "#ffffff"
  },
  dialogTitle: {
    textAlign: "center",
    backgroundImage: "linear-gradient(to right, #6c63ff, #FF6584);",
    color: "#ffffff"
  },
  dialogContent: {
    textAlign: "center"
  }
}));

export default function CreateDialog({ categories, onCreate }) {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleFormSubmit = vocab => {
    handleToggle();
    onCreate(vocab);
  };
  return (
    <>
      <Fab
        size="medium"
        aria-label="create"
        onClick={handleToggle}
        // color="secondary"
        className={classes.fab}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleToggle}
        aria-labelledby="create-a-new-vocab-dialog"
        className={classes.dialog}
      >
        <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
          Create a new vocabulary
        </DialogTitle>
        <DialogContent className={classes.dialogContent}>
          {/* <DialogContentText>Please fill out the form below:</DialogContentText> */}
          <VocabForm
            categories={categories}
            onSubmit={handleFormSubmit}
            classes={classes}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

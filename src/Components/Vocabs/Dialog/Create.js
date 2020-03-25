import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formRoot: {
    "& > *": {
      margin: theme.spacing(1),
      width: "30ch"
    }
  },
  lightText: {
    color: "white"
  }
}));

export default function CreateDialog({ categories, onCreate }) {
  const [open, setOpen] = useState(false);
  const [en, setEn] = useState("");
  const [fr, setFr] = useState("");
  const [feminine, setFeminine] = useState("");
  const [masculine, setMasculine] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");

  const classes = useStyles();

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleEnChange = event => {
    setEn(event.target.value);
  };
  const handleFrChange = event => {
    setFr(event.target.value);
  };
  const handleFeminineChange = event => {
    setFeminine(event.target.value);
  };

  const handleMasculineChange = event => {
    setMasculine(event.target.value);
  };

  const handleImageUrlChange = event => {
    setImageUrl(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    // TODO: validation
    const vocab = {
      en,
      fr,
      feminine,
      masculine,
      imageUrl,
      category
    };
    onCreate(vocab);
  };
  return (
    <>
      <Fab
        aria-label="create"
        onClick={handleToggle}
        color="secondary"
        className={classes.lightText}
      >
        <AddIcon />
      </Fab>

      <Dialog
        open={open}
        onClose={handleToggle}
        aria-labelledby="create-a-new-vocab-dialog"
      >
        <DialogTitle id="form-dialog-title">
          Create a new vocabulary
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <form className={classes.formRoot} noValidate autoComplete="off">
            <TextField
              id="en"
              label="English"
              value={en}
              onChange={handleEnChange}
            />
            <TextField
              id="fr"
              label="French"
              value={fr}
              onChange={handleFrChange}
            />
            <TextField
              id="feminine"
              label="French - feminine"
              value={feminine}
              onChange={handleFeminineChange}
            />
            <TextField
              id="masculine"
              label="French - masculine"
              value={masculine}
              onChange={handleMasculineChange}
            />
            <TextField
              id="imageUrl"
              label="Image URL"
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={category}
                onChange={handleCategoryChange}
              >
                {categories.slice(1).map(category => (
                  <MenuItem value={category}>{category}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.lightText}
            onClick={handleSubmit}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

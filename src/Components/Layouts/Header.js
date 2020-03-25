import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Vocabs/Dialog/Create";

const useStyles = makeStyles(theme => ({
  toolbar: {
    // backgroundImage: "linear-gradient(to right, #314755, #1765A3);",
    backgroundImage: "linear-gradient(to right, #6c63ff, #847dff);"
  },
  brand: {
    flex: 1
  }
}));

export default prop => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" color="inherit" className={classes.brand}>
          French Vocabulary Builder
        </Typography>
        <CreateDialog
          categories={prop.categories}
          onCreate={prop.onVocabCreate}
        />
      </Toolbar>
    </AppBar>
  );
};

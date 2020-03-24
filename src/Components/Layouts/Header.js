import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundImage: "linear-gradient(to right, #314755, #1765A3);"
  }
}));

export default prop => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" color="inherit">
          French Vocabulary
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

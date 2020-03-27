import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CreateDialog from "../Vocabs/CreateDialog";

const useStyles = makeStyles(theme => ({
  toolbar: {
    backgroundImage: "linear-gradient(to right, #6c63ff, #FF6584);"
    // backgroundImage: "linear-gradient(to right, #3F3D56, #504E65);"
  },
  brand: {
    flex: 1
  }
}));

const Header = ({ categories, onVocabCreate }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" color="inherit" className={classes.brand}>
          French Vocabulary Builder
        </Typography>
        <CreateDialog categories={categories} onCreate={onVocabCreate} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

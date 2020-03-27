import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles(theme => ({
  tabs: {
    [theme.breakpoints.down("xs")]: {
      // justifyContent: "flex-start",
      // background: "red"
    },
    [theme.breakpoints.up("sm")]: {
      // justifyContent: "center",
      // background: "yellow"
    }
  }
}));

export default ({ categories, category, onSelect }) => {
  const classes = useStyles();
  const index =
    category === "all"
      ? 0
      : categories.findIndex(categoryItem => categoryItem === category);

  const onIndexSelect = (event, index) => {
    onSelect(categories[index]);
  };

  return (
    <Paper>
      <Tabs
        value={index}
        onChange={onIndexSelect}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabs}
        variant="scrollable"
        scrollButtons="auto"
      >
        {categories
          ? categories.map(category => <Tab key={category} label={category} />)
          : null}
      </Tabs>
    </Paper>
  );
};

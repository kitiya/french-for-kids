import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default ({ categories, category, onSelect }) => {
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
        centered
      >
        {categories
          ? categories.map(category => <Tab key={category} label={category} />)
          : null}
      </Tabs>
    </Paper>
  );
};

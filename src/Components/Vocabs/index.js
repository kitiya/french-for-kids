import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import VocabCard from "./VocabCard";
import VocabForm from "./VocabForm";
import Greeting from "./Greeting";

const useStyles = makeStyles(theme => ({
  gridItem: {
    padding: 10,
    [theme.breakpoints.down("xs")]: {
      "&:first-child": {
        maxHeight: "40vh"
      }
    },
    [theme.breakpoints.up("sm")]: {
      height: "88vh"
    }
  },
  paper: {
    overflow: "auto",
    height: "100%"
  },
  categoryText: {
    textTransform: "capitalize",
    color: "#fff",
    backgroundImage: "linear-gradient(to right, #6c63ff, #847dff);",
    padding: 10
  },
  vocabList: {
    padding: 0,
    borderTop: "1px solid #AEA9FF"
  },
  vocabListItem: {
    borderBottom: "1px solid #cfd8e0",
    padding: "10px 20px",
    background: "#EEF1F4"
  },
  welcomeImageWrapper: {
    textAlign: "center"
  },
  welcomeImage: {
    padding: 20,
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90%"
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: 600
    }
  },
  formRoot: {
    maxWidth: 600,
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  lightText: {
    color: "white"
  }
}));

export default ({
  categories,
  category,
  categoryVocabs,
  vocab,
  editMode,
  onVocabSelect,
  onVocabEditSelect,
  onVocabEdit,
  onVocabDelete
}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm md={4} lg={3} className={classes.gridItem}>
        <Paper className={classes.paper}>
          {categoryVocabs.map(([vocabGroup, vocabs], index) => {
            return category === "all" || category === vocabGroup ? (
              <div key={index}>
                <Typography variant="h6" className={classes.categoryText}>
                  {vocabGroup}
                </Typography>
                <List component="ul" className={classes.vocabList}>
                  {vocabs.map(vocab => (
                    <ListItem
                      key={vocab.id}
                      className={classes.vocabListItem}
                      button
                      aria-label="vocab"
                      onClick={() => onVocabSelect(vocab.id)}
                    >
                      <ListItemText primary={vocab.en} />
                      <ListItemSecondaryAction>
                        <IconButton
                          edge="end"
                          aria-label="edit"
                          onClick={() => onVocabEditSelect(vocab.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => onVocabDelete(vocab.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </div>
            ) : null;
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm md={8} lg={9} className={classes.gridItem}>
        <Paper className={classes.paper}>
          {editMode ? (
            <VocabForm
              vocab={vocab}
              categories={categories}
              onSubmit={onVocabEdit}
              classes={classes}
            />
          ) : vocab.id ? (
            <VocabCard vocab={vocab} />
          ) : (
            <Greeting classes={classes} />
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

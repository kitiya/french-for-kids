import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";

import VocabCard from "./VocabCard";

const useStyles = makeStyles(theme => ({
  gridItem: {
    height: "80vh"
  },
  paper: {
    padding: 20,
    marginTop: 10,
    // backgroundImage: "linear-gradient(to bottom, #EEF1F4, #ffffff)",
    overflow: "auto",
    height: "100%"
  },
  categoryWrapper: {
    padding: 0
  },
  categoryText: {
    textTransform: "capitalize",
    color: "#fff",
    // backgroundImage: "linear-gradient(to right, #0F2027, #203A43, #2C5364);",
    backgroundImage: "linear-gradient(to right, #6c63ff, #847dff);",

    marginTop: 10,
    padding: 8
  },
  vocabListWrapper: {
    marginTop: 2,
    padding: 0,
    background: "#EEF1F4"
  },
  welcomeImageWrapper: {
    textAlign: "center"
  },
  welcomeImage: {
    maxWidth: 600
  }
}));

export default ({ category, vocabs, vocab, onVocabSelect }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm md={3} className={classes.gridItem}>
        <Paper className={classes.paper}>
          {vocabs.map(([vocabGroup, vocabs], index) => {
            return category === "all" || category === vocabGroup ? (
              <div key={index}>
                <Typography variant="h6" className={classes.categoryText}>
                  {vocabGroup}
                </Typography>
                {vocabs.map(vocab => (
                  <List
                    key={vocab.id}
                    component="ul"
                    aria-label="vocab"
                    className={classes.vocabListWrapper}
                    onClick={() => onVocabSelect(vocab.id)}
                  >
                    <ListItem button>
                      <ListItemText primary={vocab.en} />
                    </ListItem>
                  </List>
                ))}
              </div>
            ) : null;
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} sm md={9}>
        <Paper className={classes.paper}>
          {vocab.id ? (
            <VocabCard vocab={vocab} />
          ) : (
            <Box className={classes.welcomeImageWrapper}>
              <img
                className={classes.welcomeImage}
                alt="welcome"
                src={`${process.env.PUBLIC_URL}/images/svg/happy_music.svg`}
              />
              <Typography variant="h3" gutterBottom>
                Welcome
              </Typography>
              <Typography variant="h5">
                Please select a vocabulary from the list on the left.
              </Typography>
            </Box>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "10px auto"
  },
  media: {
    height: 200
  },
  enText: {
    color: "#6C63FF"
  },
  frText: {
    color: "#FF6584"
  }
});

export default function VocabCard({ vocab }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={vocab.imageUrl}
          alt={vocab.en}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" className={classes.enText}>
            {vocab.en}
          </Typography>
          <Typography gutterBottom variant="h5" className={classes.frText}>
            {vocab.fr}
          </Typography>
          {vocab.feminine ? (
            <>
              <Typography
                gutterBottom
                variant="h5"
                display="inline"
                className={classes.frText}
              >
                {vocab.feminine}
              </Typography>
              <Typography gutterBottom varient="subtitle2" display="inline">
                &nbsp;(fem.)
              </Typography>
            </>
          ) : null}

          {vocab.masculine ? (
            <>
              <br />
              <Typography
                gutterBottom
                variant="h5"
                display="inline"
                className={classes.frText}
              >
                {vocab.masculine}
              </Typography>
              <Typography gutterBottom varient="subtitle2" display="inline">
                &nbsp;(masc.)
              </Typography>
            </>
          ) : null}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Greeting = ({ classes }) => (
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
);

export default Greeting;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import {
  Button, Grid,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  twitter: {
    color: '#00aced',
  },
}));

const OAuthButton:React.FC = () => {
  const classes = useStyles();

  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:8000/api/auth/github';
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Button
          variant="outlined"
          color="default"
          startIcon={
            <GitHubIcon />
          }
          fullWidth
          onClick={handleGithubLogin}
        >
          github
        </Button>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="outlined"
          color="default"
          startIcon={(
            <TwitterIcon className={classes.twitter} />
          )}
          fullWidth
        >
          twitter
        </Button>
      </Grid>
    </Grid>
  );
};

export default OAuthButton;

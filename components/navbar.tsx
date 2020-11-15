import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
  Grid,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  twitter: {
    color: '#00aced',
  },
}));

const renderLoginHtml = (classes) => {
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

const MenuAppBar:React.FC = () => {
  const classes = useStyles();

  const MySwal = withReactContent(Swal);

  const handleLogin = async() => {
    await MySwal.fire({
      title: 'ログインする',
      html: renderLoginHtml(classes),
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor: '#d33',
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          いとおかし
        </Typography>
        <Button onClick={handleLogin}>
          ログイン
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;

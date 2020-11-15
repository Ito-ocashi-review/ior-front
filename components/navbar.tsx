import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import ReactDOMServer from 'react-dom/server';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
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
}));

const renderLoginHtml = () => {
  return ReactDOMServer.renderToStaticMarkup(
    <div>
      <Button
        variant="contained"
        color="default"
        startIcon={<GitHubIcon />}
      >
        Delete
      </Button>
    </div>
    ,
  );
};

const MenuAppBar:React.FC = () => {
  const classes = useStyles();

  const MySwal = withReactContent(Swal);

  const handleLogin = async() => {
    await MySwal.fire({
      title: 'ログインする',
      html: renderLoginHtml(),
    });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
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

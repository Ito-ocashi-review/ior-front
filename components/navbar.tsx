import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
  AppBar, Toolbar, Typography, IconButton, Button,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import OAuthButton from './OAuthButton';


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

const MenuAppBar:React.FC = () => {
  const classes = useStyles();

  const MySwal = withReactContent(Swal);

  const handleLogin = () => {
    MySwal.fire({
      title: 'ログインする',
      html: <OAuthButton />,
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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, IconButton, Button,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import { useSession, signin, signout } from 'next-auth/client';


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

const MenuAppBar:React.FC = () => {
  const [session] = useSession();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          いとおかし
        </Typography>
        {session != null
        ? (
          <>
            Hello {session.user.name}!
            <Button color="inherit" onClick={() => signout()}>
              Logout
            </Button>
          </>
          ) : (
            <Button color="inherit" onClick={() => signin('github')}>
              Login
            </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const MenuAppBar:React.FC = () => {
  const hoge;
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
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;

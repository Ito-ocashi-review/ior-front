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

const getSweet = () => {
  console.log('sweetを取ってくる');
  window.location.href('"http://localhost:8000/api/sweets/5ce4f06355e6136cf623a2ab"');
};

const MenuAppBar:React.FC = () => {
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
        <Button onClick={getSweet}>
          お菓子を取ってくる
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { signOut, useSession } from 'next-auth/client';
import Router from 'next/router';

import {
  AppBar, Toolbar,
} from '@material-ui/core';

import OAuthButton from './OAuthButton';
import Button from './atoms/Button';

const MenuAppBar:React.FC = () => {
  const [session, loading] = useSession();

  const MySwal = withReactContent(Swal);

  const useStyles = makeStyles(theme => ({
    navbar: {
      backgroundColor: '#270000',
    },
    halloweenFont: {
      color: '#FFAA01',
    },
  }));

  const handleLogin = () => {
    MySwal.fire({
      title: 'ログインする',
      html: <OAuthButton />,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor: '#d33',
    });
  };

  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <Button onClick={() => Router.push('/')} color="inherit">
          いとおかし
        </Button>
        {!session && (
          <Button onClick={handleLogin} color="inherit">
            ログイン
          </Button>
        )}
        {session && (
          <>
            <Button onClick={signOut}>
              ログアウト
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => Router.push('/admin')}
            >
              管理画面
            </Button>
            <img
              height="50px"
              className="ml-auto rounded-circle"
              src={session.user.image}
            />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MenuAppBar;

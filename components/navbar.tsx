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
  const [session, loading] = useSession();

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
        <Button onClick={() => Router.push('/')}>
          いとおかし
        </Button>
        {!session && (
          <Button onClick={handleLogin}>
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

import React from 'react';
import {
  Button, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import OAuthButton from '../components/OAuthButton';
import SweetRanking from '../components/topRanking/SweetRanking';

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

const useStyles = makeStyles(theme => ({
  top: {
    color: '#270000',
    height: '100vh',
    margin: '50px',
    textAlign: 'center',
  },
  title: {
    fontSize: '100px',
    font: 'MotoyalMaru',
  },
  reviewButton: {
    color: 'black',
    border: '2px solid #984B15',
    backgroundColor: '#984B15',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#984B15',
      borderRadius: '30px',
      transition: 'all 0.2s linear',
    },
  },
}));

const Index: React.FC = () => {
  const [session, loading] = useSession();

  const classes = useStyles();

  return (
    <div className={classes.top}>
      <div>
        <span className={classes.title}>お菓子ランキングトップ３</span>
      </div>
      <Grid container spacing={9}>
        <SweetRanking />
      </Grid>
      {session && (
        <Button
          variant="outlined"
          className={classes.reviewButton}
          onClick={() => Router.push('/new-review')}
        >
          投稿する
        </Button>
        )}
      {!session && (
        <Button
          variant="outlined"
          className={classes.reviewButton}
          onClick={() => handleLogin()}
        >
          投稿するにはログインが必要です
        </Button>
        )}
    </div>
  );
};

export default Index;

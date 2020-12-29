import React from 'react';
import {
  Button, Card, CardContent, CardMedia, Container, Grid, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import OAuthButton from '../components/OAuthButton';

const sweetReviews = [...Array(3)].map((value, i) => {
  return (
  // 後でkeyの名前はお菓子の名前にする。
  // eslint-disable-next-line react/no-array-index-key
    <div key={i}>
      <div>
        <div className="sweet-item">
          <span>ブラックサンダ</span>
          <div className="sweet-review">
            まあまあうまい
          </div>
        </div>
      </div>
    </div>
  );
});

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
    textAlign: 'center',
    margin: '50px',
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
  cardContent: {
    color: 'white',
    backgroundColor: '#270000',
  },
}));

const Index: React.FC = () => {
  const [session, loading] = useSession();

  const filePaths = ['/image/jagariko.png', '/image/jagariko.png', '/image/jagariko.png'];

  const classes = useStyles();

  return (
    <div className={classes.top}>
      <Grid container spacing={5}>
        <span className={classes.title}>お菓子ランキングトップ３</span>
        <Grid item xs={4}>
          <Card>
            <CardMedia
              component="img"
              src={filePaths[0]}
            />
            <CardContent className={classes.cardContent}>
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent className={classes.cardContent}>
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent className={classes.cardContent}>
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
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

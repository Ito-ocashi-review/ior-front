import React from 'react';
import {
  Button, Card, CardContent, CardHeader, CardMedia, Container, Grid, Paper, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import { Rating } from '@material-ui/lab';
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
  cardContent: {
    color: 'white',
    backgroundColor: '#270000',
  },
  cardHeader: {
    textAlign: 'left',
  },
  cardRating: {
    textAlign: 'right',
  },
  cardButton: {
    color: '#FFAA01',
    margin: '15px 0',
    border: '1px solid #FFAA01',
    borderRadius: '18px',
  },
}));

const Index: React.FC = () => {
  const [session, loading] = useSession();

  const classes = useStyles();

  const filePaths = ['/image/jagariko.png', '/image/poteti.png', '/image/umaibou.png'];

  const cards = filePaths.map((filePath) => {
    return (
      <>
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="じゃがりこ"
              className={`${classes.cardContent} ${classes.cardHeader}`}
            />
            <CardContent className={`${classes.cardContent} ${classes.cardRating}`}>
              <Rating
                value={3.5}
              />
            </CardContent>
            <CardMedia
              component="img"
              src={filePath}
            />
            <CardContent className={`${classes.cardContent} ${classes.cardRating}`}>
              <Typography>
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
              </Typography>
              <Button className={classes.cardButton}>
                + もっと見る
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </>
    );
  });

  return (
    <div className={classes.top}>
      <div>
        <span className={classes.title}>お菓子ランキングトップ３</span>
      </div>
      <Grid container spacing={9}>
        {cards}
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

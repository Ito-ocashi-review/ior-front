import React from 'react';
import {
  Button, Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import Axios from 'axios';
import OAuthButton from '../components/OAuthButton';
import SweetRanking from '../components/topRanking/SweetRanking';
import TotalRanking from '../components/totalRanking/TotalRanking';

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
  },
  section: {
    margin: '80px 50px',
  },
  title: {
    fontSize: '100px',
    font: 'MotoyalMaru',
  },
  sweetRanking: {
    margin: '30px 0',
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
  totalRanking: {
    margin: '30px 0',
  },
}));

type data = {
    name: string,
    evaluation: string,
}

type Props ={
  sweetsData: data[]
}

const Index: React.FC<Props> = ({ sweetsData }) => {
  const [session, loading] = useSession();

  const classes = useStyles();

  return (
    <div className={classes.top}>
      <div className={classes.section}>
        <span className={classes.title}>お菓子ランキングトップ３</span>
        <div className={classes.sweetRanking}>
          <Grid container spacing={3}>
            <SweetRanking sweetsData={sweetsData} />
          </Grid>
        </div>
      </div>
      <div className={classes.section}>
        <span className={classes.title}>総合ランキング</span>
        <div className={classes.totalRanking}>
          <Grid container spacing={8}>
            <TotalRanking />
          </Grid>
        </div>
      </div>
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

export const getServerSideProps:GetServerSideProps = async(ctx) => {
  const sweetsData = await Axios.get('http://ior_back:8000/api/ranking');
  return {
    props: {
      sweetsData: sweetsData.data,
    },
  };
};

export default Index;

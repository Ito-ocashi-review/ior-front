import React from 'react';
import {
  Grid, makeStyles,
} from '@material-ui/core';
import SweetCard from './SweetCard';

const useStyles = makeStyles(theme => ({
  ranking: {
    fontFamily: 'Luckiest Guy',
    fontSize: '80px',
    fonttWeight: '80px',
    color: '#F7CB00',
    letterSpacing: '8.9px',
    WebkitTextStroke: '2px #000',
  },
}));

const SweetRanking:React.FC = () => {
  const classes = useStyles();
  const filePaths = ['/image/jagariko.png', '/image/poteti.png', '/image/umaibou.png'];

  const cards = filePaths.map((filePath, index) => {
    return (
      <Grid item xs={4} key={filePath}>
        <span className={classes.ranking}>No.{index + 1}</span>
        <SweetCard
          filePath={filePath}
        />
      </Grid>
    );
  });

  return (
    <>
      {cards}
    </>
  );
};

export default SweetRanking;

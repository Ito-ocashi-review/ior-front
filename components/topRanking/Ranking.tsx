import React from 'react';
import {
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  ranking: {
    fontFamily: 'Luckiest Guy',
    fontSize: '80px',
    fonttWeight: '80px',
    letterSpacing: '8.9px',
    WebkitTextStroke: '4px #000',
  },
  one: {
    color: '#F7CB00',
  },
  two: {
    color: '#D3D3D3',
  },
  three: {
    color: '#C47222',
  },
}));

type props = {
  number: number,
}

const Ranking:React.FC<props> = ({ number }) => {
  const classes = useStyles();

  const rankingDisplay = (num) => {
    if (num === 1) {
      return (
        <span className={`${classes.ranking} ${classes.one}`}>No.1</span>
      );
    }
    if (num === 2) {
      return (
        <span className={`${classes.ranking} ${classes.two}`}>No.2</span>
      );
    }
    return <span className={`${classes.ranking} ${classes.three}`}>No.3</span>;
  };

  return (
    rankingDisplay(number)
  );
};

export default Ranking;

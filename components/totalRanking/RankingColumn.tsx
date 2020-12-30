import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

type Props ={
  ranking: number,
  name: string,
  reviewAmount: number,
  rankingUnit: string
}

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '30px',
  },
  ranking: {
    fontFamily: 'Luckiest Guy',
  },
  item: {
    textAlign: 'left',
  },
}));

const Reporter:React.FC<Props> = ({
  ranking, name, reviewAmount, rankingUnit,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={2} className={classes.ranking}>
        {ranking}
      </Grid>
      <Grid item xs={4} className={classes.item}>
        {name}
      </Grid>
      <Grid item xs={6}>
        <span className={`${classes.ranking} ${classes.item}`}>{reviewAmount}</span> {rankingUnit}
      </Grid>
    </Grid>
  );
};

export default Reporter;

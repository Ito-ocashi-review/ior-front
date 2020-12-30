import { Grid } from '@material-ui/core';
import React from 'react';

type Props ={
  ranking: number,
  name: string,
  reviewAmount: number,
}

const Reporter:React.FC<Props> = ({ ranking, name, reviewAmount }) => {
  return (
    <Grid container>
      <Grid item xs={2}>
        {ranking}
      </Grid>
      <Grid item xs={4}>
        {name}
      </Grid>
      <Grid item xs={6}>
        {reviewAmount} れびゅー
      </Grid>
    </Grid>
  );
};

export default Reporter;

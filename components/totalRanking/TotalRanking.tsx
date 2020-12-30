import { Grid, Paper } from '@material-ui/core';
import React from 'react';
import ReporterRanking from './ReporterRanking';

const useStyles = () => {

};


const TotalRanking:React.FC = () => {
  return (
    <>
      <Grid item xs={6}>
        <ReporterRanking />
      </Grid>
      <Grid item xs={6}>
        <ReporterRanking />
      </Grid>
    </>
  );
};

export default TotalRanking;

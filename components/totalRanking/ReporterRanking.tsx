import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import Reporter from './Reporter';

const useStyle = makeStyles(theme => ({
  reporterRanking: {
    backgroundColor: '#270000',
    color: 'white',
  },
  title: {
    fontFamily: 'MotoyaLMaru',
    fontSize: '40px',
  },
}));

const ReporterRanking:React.FC = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.reporterRanking}>
      <span className={classes.title}>お菓子レポーターランキング</span>
      <Reporter
        ranking={1}
        name="城之内まこと"
        reviewAmount={2000}
      />
    </Paper>
  );
};

export default ReporterRanking;

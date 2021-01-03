import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import RankingColumn from './RankingColumn';

const useStyle = makeStyles(theme => ({
  reporterRanking: {
    backgroundColor: '#270000',
    color: 'white',
    padding: '20px',
  },
  title: {
    fontFamily: 'MotoyaLMaru',
    fontSize: '40px',
  },
  ranking: {
    margin: '50px 0',
  },
  content: {
    height: '400px',
    overflow: 'scroll',
  },
}));

type Ranking = {
  name: string,
  amount: number,
}

type Props = {
  title: string,
  rankingArray: Array<Ranking>,
  rankingUnit: string,
}

const ReporterRanking:React.FC<Props> = ({ title, rankingArray, rankingUnit }) => {
  const classes = useStyle();
  const repoters = rankingArray.map((ranking, index) => {
    return (
      <div className={classes.ranking}>
        <RankingColumn
          ranking={index + 1}
          name={ranking.name}
          reviewAmount={ranking.amount}
          rankingUnit={rankingUnit}
        />
      </div>
    );
  });

  return (
    <Paper className={classes.reporterRanking}>
      <span className={classes.title}>{title}</span>
      <div className={classes.content}>
        {repoters}
      </div>
    </Paper>
  );
};

export default ReporterRanking;

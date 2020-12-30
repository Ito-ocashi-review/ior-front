import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import SweetCard from './SweetCard';
import TopRanking from './TopRanking';

const SweetTopRanking:React.FC = () => {
  const filePaths = ['/image/jagariko.png', '/image/poteti.png', '/image/umaibou.png'];
  const cards = filePaths.map((filePath, index) => {
    return (
      <Grid item xs={4} key={filePath}>
        <TopRanking
          number={index + 1}
        />
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

export default SweetTopRanking;

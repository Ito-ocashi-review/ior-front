import React from 'react';
import {
  Grid,
} from '@material-ui/core';
import SweetCard from './SweetCard';
import TopRanking from './TopRanking';

type data = {
  name: string,
  evaluation: string,
}

type Props ={
  sweetsData: data[]
}

const SweetTopRanking:React.FC<Props> = ({ sweetsData }) => {
  const cards = sweetsData.slice(0, 3).map((sweet, index) => {
    return (
      <Grid item xs={4} key={sweet.name}>
        <TopRanking
          number={index + 1}
        />
        <SweetCard
          evaluation={sweet.evaluation}
          name={sweet.name}
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

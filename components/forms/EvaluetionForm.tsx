import React from 'react';
import { Rating } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

const EvaluationForm: React.FC = () => {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <>
      <Typography component="legend">評価する</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        precision={0.1}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};

export default EvaluationForm;

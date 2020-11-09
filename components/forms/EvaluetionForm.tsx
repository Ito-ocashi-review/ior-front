import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { Rating } from '@material-ui/lab';
import { Typography } from '@material-ui/core';

const EvaluationForm: React.FC = () => {
  const { control, watch } = useFormContext();
  const rating: number = watch('rating', 0);

  return (
    <>
      <Typography component="legend">評価する</Typography>
      <Controller
        control={control}
        name="rating"
        render={({ onChange, value }) => (
          <Rating
            value={value}
            precision={0.1}
            onChange={onChange}
          />
        )}
      >
      </Controller>
      <span>{rating}</span>
    </>
  );
};

export default EvaluationForm;

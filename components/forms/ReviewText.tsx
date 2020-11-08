import { TextField } from '@material-ui/core';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

const ReviewText: React.FC = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  return (
    
        <Controller
          name="sweetReview"
          control={control}
          render={({ onChange, value }) => (
            <TextField
              id="standard-textarea"
              label="コメントを投稿"
              placeholder="投稿内容を入力"
              fullWidth
              rows="5"
              multiline
              margin="normal"
            />
          )}
          >
         </Controller>
  );
};

export default ReviewText;

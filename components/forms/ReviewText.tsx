import React from 'react';
import { useForm, Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@material-ui/core';

type FormValues = {
  TextField: string
  comment: string
}


const ReviewText: React.FC = () => {
  const { control } = useFormContext<FormValues>();

  return (
    <>
      <Controller
        control={control}
        name="comment"
        render={({ onChange, value }) => (
          <TextField
            value={value}
            id="standard-textarea"
            label="コメントを投稿"
            placeholder="投稿内容を入力"
            fullWidth
            rows="5"
            multiline
            margin="normal"
            onChange={onChange}
          />
        )}
      />
    </>
  );
};

export default ReviewText;

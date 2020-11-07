import React from 'react';
import { TextField } from '@material-ui/core';

const ReviewText: React.FC = () => {
  return (
    <div>
      <TextField
        id="standard-textarea"
        label="コメントを投稿"
        placeholder="投稿内容を入力"
        fullWidth
        rows="5"
        multiline
        margin="normal"
      />
    </div>
  );
};

export default ReviewText;

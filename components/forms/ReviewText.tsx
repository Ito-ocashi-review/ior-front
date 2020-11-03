import React from 'react';
import TextField from '@material-ui/core/TextField';

const ReviewText: React.FC = () => {
  return (
    <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
    </form>
  )
}

export default ReviewText;

import React from 'react';
import { Button } from '@material-ui/core';

const Top:React.FC = () => {
  return (
    <div>
      <p className="text-info">
        Topページ
      </p>
      <Button variant="contained" color="primary">Hello World</Button>
    </div>
  );
};

export default Top;

import React from 'react';
import { MenuItem } from '@material-ui/core';

type Props = {
  sweets: string[],
  onChange: VoidFunction,
}

const SweetsItems: React.FC<Props> = ({ sweets }) => {
  return (
    sweets.map((sweet: string) => {
      return (
        <MenuItem id={sweet}>
          {sweet}
        </MenuItem>
      );
    })
  );
};

export default SweetsItems;

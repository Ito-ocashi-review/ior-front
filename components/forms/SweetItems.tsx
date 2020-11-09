import React from 'react';
import { MenuItem } from '@material-ui/core';

type Props = {
  sweets: string[],
  onChange: VoidFunction,
}

const SweetsItems: React.FC<Props> = ({ sweets, onChange }) => {
  return (
    sweets.map((sweet: string) => {
      return (
        <MenuItem id={sweet} onClick={onChange(sweet)}>
          {sweet}
        </MenuItem>
      );
    })
  );
};

export default SweetsItems;

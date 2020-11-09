import React from 'react';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import SweetsItems from './SweetItems';

type Props = {
  sweets: Array<string>
}

const SweetsDropDown: React.FC<Props> = React.memo(({ sweets }) => {
  const { control, watch } = useFormContext();
  const sweetsItems: JSX.Element[] = sweets.map((item: string) => {
    return (
      <MenuItem id={item}>
        {item}
      </MenuItem>
    );
  });

  return (
    <>
      <InputLabel id="sweet">お菓子を選択</InputLabel>

      <Controller
        control={control}
        name="sweet"
        render={({ onChange }) => (
          <Select labelId="sweet" id="select" fullWidth>
            <SweetsItems onChange={onChange} sweets={sweets} />
          </Select>
        )}
      >

      </Controller>
    </>
  );
});

export default SweetsDropDown;

import React from 'react';
import { Select, InputLabel, MenuItem } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';
import SweetsItems from './SweetItems';

type Props = {
  sweets: Array<string>
}

const SweetsDropDown: React.FC<Props> = React.memo(({ sweets }) => {
  const { control, watch } = useFormContext();
  const sweet = watch('sweet', '');

  return (
    <>
      <InputLabel id="sweet">お菓子を選択</InputLabel>

      <Controller
        control={control}
        name="sweet"
        render={({ onChange }) => (
          <Select labelId="sweet" id="select" value={sweet} onChange={onChange} fullWidth>
            { sweets.map((sweet: string) => {
                return (
                  <MenuItem id={sweet} value={sweet}>
                    {sweet}
                  </MenuItem>
                );
              })
            }
          </Select>
        )}
      >
      </Controller>
    </>
  );
});

export default SweetsDropDown;

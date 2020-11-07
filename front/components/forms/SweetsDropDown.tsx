import React from 'react';
import { Select, InputLabel, MenuItem } from '@material-ui/core';

const sweets: Array<string> = ["チュッパチャップス","kitkat","ぼたぼた焼き"];

const sweetsItems: JSX.Element[] = sweets.map((item: string)=>{
  return (
    <MenuItem id={item}>
      {item}
    </MenuItem>
  )
});

const SweetsDropDown: React.FC = () => {
  return (
    <>
      <InputLabel id="sweet">お菓子を選択</InputLabel>
      <Select labelId="sweet" id="select" fullWidth={true}>
        {sweetsItems}
      </Select>
    </>
  )
}

export default SweetsDropDown;
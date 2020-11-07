import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

const sweets: Array<string> = ["チュッパチャップス","kitkat","ぼたぼた焼き"];

const sweetsItems = sweets.map((item: string)=>{
  return (
    <Button>
      {item}
    </Button>
  )
});

const SweetsDropDown: React.FC = () => {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      {sweetsItems}
    </ButtonGroup>
  )
}

export default SweetsDropDown;
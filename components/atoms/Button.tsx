import { FC, ComponentProps } from 'react';
import { Button as MuiButton } from '@material-ui/core';

type Props = ComponentProps<typeof MuiButton>;

const Button:FC<Props> = (props:Props) => {
  const { color, variant, onClick } = props;

  return (
    <MuiButton
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;

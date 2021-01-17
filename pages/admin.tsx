import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { createSweet } from '../repository/api/sweetsRepository';


type Inputs = {
  sweet: string,
};

const Admin: React.FC = () => {
  const {
    handleSubmit, control,
  } = useForm<Inputs>();

  const onSubmit = (data) => {
    createSweet(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>お菓子を入力してください</h3>
      <Controller
        as={Input}
        name="sweet"
        control={control}
        placeholder="ビックリマンチョコ"
        className="materialUIInput"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        投稿する
      </Button>
    </form>
  );
};

export default Admin;

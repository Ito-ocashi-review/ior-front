import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import SweetsDropDown from './SweetsDropDown';
import ReviewText from './ReviewText';
import EvaluationForm from './EvaluetionForm';

type Props ={
  sweets: Array<string>,
}

const NewReviewForm: React.FC<Props> = ({ sweets }) => {
  const methods = useForm();
  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <p>
          新しいレビューを登録する
        </p>
        <SweetsDropDown sweets={sweets} />
        <ReviewText />
        <EvaluationForm />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
          投稿する
        </Button>
      </form>
    </FormProvider>
  );
};

export default NewReviewForm;

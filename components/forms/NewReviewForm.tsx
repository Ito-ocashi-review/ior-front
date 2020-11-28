import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import logger from 'react-logger';
import SweetsDropDown from './SweetsDropDown';
import ReviewText from './ReviewText';
import EvaluationForm from './EvaluetionForm';

type Props ={
  sweets: Array<string>,
}

const NewReviewForm: React.FC<Props> = ({ sweets }) => {
  const methods = useForm();
  const onSubmit = async(data) => {
    console.log(data);
    try {
      await axios.post(`${process.env.API_SERVER_URL}/api/reviews`, {
        userId: '5ce4f06355e6136cf623a2aa',
        sweetId: '5ce7ad3028890bd71749d477',
        star: 1.2,
        comment: 'fdfasdla',
      });
    }
    catch (error) {
      logger.error(error);
    }

  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <span>
          新しいレビューを登録する
        </span>
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

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useSession } from 'next-auth/client';
import Button from '@material-ui/core/Button';
import logger from 'react-logger';
import SweetsDropDown from './SweetsDropDown';
import ReviewText from './ReviewText';
import EvaluationForm from './EvaluetionForm';
import { postReview } from '../../repository/api/reviewRepository';

type Props = {
  sweets: {name: string, id: number}[]
}

const NewReviewForm: React.FC<Props> = ({ sweets }) => {
  const methods = useForm();

  const [session, loading] = useSession();

  const onSubmit = async(data) => {
    try {
      await postReview(data, session);
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

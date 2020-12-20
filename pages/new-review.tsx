import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useSession } from 'next-auth/client';
import Button from '@material-ui/core/Button';
import logger from 'react-logger';
<<<<<<< HEAD
import { Container } from '@material-ui/core';
=======
>>>>>>> 1182cb8ae0c818ee9f5e28428b73d2e1314b9390
import SweetsDropDown from '../components/forms/SweetsDropDown';
import ReviewText from '../components/forms/ReviewText';
import EvaluationForm from '../components/forms/EvaluetionForm';
import { postReview } from '../repository/api/reviewRepository';
import { getSweet } from '../repository/api/sweetsRepository';

const NewReview: React.FC = () => {
  const methods = useForm();

  const [sweets, setSweets] = useState([]);
  const [session, loading] = useSession();

  useEffect(() => {
    const fetchSweets = async(): Promise<void> => {
      try {
        const sweets = await getSweet();
        setSweets(sweets.data);
      }
      catch (error) {
        logger.error(error);
      }
    };
    fetchSweets();
  }, []);

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
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
        >
          投稿する
        </Button>
      </form>
    </FormProvider>
  );
};

export default NewReview;

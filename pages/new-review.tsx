import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useSession, getSession } from 'next-auth/client';
import Button from '@material-ui/core/Button';
import logger from 'react-logger';
import { Container } from '@material-ui/core';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import Axios from 'axios';
import SweetsDropDown from '../components/forms/SweetsDropDown';
import ReviewText from '../components/forms/ReviewText';
import EvaluationForm from '../components/forms/EvaluetionForm';
import { postReview } from '../repository/api/reviewRepository';

type Props = {
  sweets: {id:number, name:string, createdAt:Date}[]
}

const NewReview: React.FC<Props> = ({ sweets }) => {
  const methods = useForm();
  // const [sweets, setSweets] = useState([]);
  const [session, loading] = useSession();

  const onSubmit = async(data) => {
    try {
      await postReview(data, session);
      Router.push('/');
    }
    catch (error) {
      logger.error(error);
    }
  };

  return (
    <Container maxWidth="md">
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
    </Container>
  );
};

export const getServerSideProps:GetServerSideProps = async(context) => {
  const session = await getSession(context);
  // プラウザ経由でなくサーバーサイドからapiを呼ぶ時はエンドポイントを変える
  const sweets = await Axios.get('http://ior_back:8000/api/sweets');
  if (!session) {
    return {
      notFound: true,
    };
  }

  return {
    props: { sweets: sweets.data },
  };
};

export default NewReview;

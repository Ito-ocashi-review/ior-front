import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import logger from 'react-logger';
import { useSession } from 'next-auth/client';
import Star from './icons/star';
import NewReviewForm from './forms/NewReviewForm';
import { getSweet } from '../repository/api/sweetsRepository';

const sweetReviews = [...Array(3)].map((value, i) => {
  return (
  // 後でkeyの名前はお菓子の名前にする。
  // eslint-disable-next-line react/no-array-index-key
    <div key={i}>
      <div>
        <div className="sweet-item">
          <span>ブラックサンダー</span>
          <div className="sweet-review">
            まあまあうまい
          </div>
        </div>
        <div>
          <Star />
          <Star />
        </div>
      </div>
    </div>
  );
});

const Top: React.FC = (props) => {

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

  return (
    <>
      <h2>好きなお菓子をランク付けしよう</h2>
      <Container maxWidth="md">
        <span>{sweetReviews}</span>
        <div>
          <div>
            <h3>
              お菓子レポーターランキング
            </h3>
          </div>
        </div>
        <div>
          <h3>
            お菓子ランキング
          </h3>
        </div>
        {session && (
          <NewReviewForm
            sweets={sweets}
          />
        )}
      </Container>
    </>
  );
};

export default Top;

import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import axios from 'axios';
import logger from 'react-logger';
import Star from './icons/star';
import NewReviewForm from './forms/NewReviewForm';

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

  useEffect(() => {
    const fetchSweets = async(): Promise<void> => {
      try {
        const sweets = await axios.get(`${process.env.API_SERVER_URL}/api/sweets`);
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
        {props.session && (
          <NewReviewForm
            sweets={sweets}
          />
        )}
      </Container>
    </>
  );
};

export default Top;

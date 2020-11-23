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

const Top: React.FC = () => {
  const [sweets, setSweets] = useState([]);

  const fetchSweets: any = async() => {
    try {
      const sweets = await axios.get('http://localhost:8000/api/sweets');
      const names = sweets.data.map((sweet) => {
        return sweet.name;
      });
      setSweets(names);
      logger.info('get all sweet data');
    }
    catch (error) {
      logger.error(error);
    }
  };

  useEffect(() => {
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
        <NewReviewForm
          sweets={sweets}
        />
      </Container>
    </>
  );
};

export default Top;

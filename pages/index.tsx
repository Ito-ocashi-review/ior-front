import React from 'react';
import { Container } from '@material-ui/core';
import Star from '../components/icons/star';
import NewReviewForm from '../components/forms/NewReviewForm';

const sweetReviews = [...Array(3)].map((value, i) => {
  return (
    // 後でkeyの名前はお菓子の名前にする。
    // eslint-disable-next-line react/no-array-index-key
    <div key={i}>
      <div>
        <div className="sweet-item">
          <p>ブラックサンダー</p>
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

// あとでDBから値を受け取る
const sweets: Array<string> = ['チュッパチャップス', 'kitkat', 'ぼたぼた焼き'];

const Top: React.FC = () => {
  return (
    <>
      <h2>好きなお菓子をランク付けしよう</h2>
      <Container maxWidth="md">
        <p>{sweetReviews}</p>
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

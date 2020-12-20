import React from 'react';
import { Button, Container } from '@material-ui/core';
import { useSession } from 'next-auth/client';
import Router from 'next/router';

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
      </div>
    </div>
  );
});

const Index: React.FC = () => {

  const [session, loading] = useSession();


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
        <Button color="secondary" variant="outlined" onClick={() => Router.push('/new-review')}>
          投稿する
        </Button>
      </Container>
    </>
  );
};

export default Index;

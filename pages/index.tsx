import React from 'react';
import Star from '../components/icons/star';

const sweetReviews = [...Array(3)].map((value, i) => {
  return (
    // 後でkeyの名前はお菓子の名前にする。
    // eslint-disable-next-line react/no-array-index-key
    <div className="col-md-4" key={i}>
      <div className="px-3 bg-light">
        <div className="sweet-item">
          <p className="pt-3">ブラックサンダー</p>
          <div className="sweet-review">
            まあまあうまい
          </div>
        </div>
        <div className="py-3">
          <Star
            width="1em"
            height="1em"
            fill="currentColor"
          />
          <Star
            width="1em"
            height="1em"
            fill="currentColor"
          />
        </div>
      </div>
      <div className="px-3 bg-light">

      </div>
    </div>
  );
});

const Top: React.FC = () => {
  return (
    <>
      <h2 className="text-center my-4">好きなお菓子をランク付けしよう</h2>
      <div className="container my-5 py-5 bg-success">
        <div className="row">
          {sweetReviews}
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 bg-success">
            <div className="row">
              <h3>
                お菓子レポーターランキング
              </h3>
            </div>
          </div>
          <div className="col-md-6 bg-success">
            <h3>
              お菓子ランキング
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;

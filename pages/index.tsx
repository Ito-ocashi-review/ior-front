import React from 'react';

const Top: React.FC = () => {
  return (
    <>
      <h2 className="text-center">好きなお菓子をランク付けしよう</h2>
      <div className="container my-5 py-5 bg-success">
        <div className="row">
          <div className="col-md-4">
            <div className="px-3 bg-info">
              <div className="sweet-item">
                <p className="pt-3">kitcat</p>
                <div className="sweet-review">
                  最高にうまい
                </div>
                <img src="/static/images/star.svg" />
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="px-3 bg-info">
              <div className="sweet-item">
                <p className="pt-3">ブラックサンダー</p>
                <div className="sweet-review">
                  ブラックサンダー
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="px-3 bg-info">
              <div className="sweet-item">
                <p className="pt-3">チョコボール</p>
                <div className="sweet-review">
                  チョコボール
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            お菓子レポーターランキング
          </div>
          <div className="col-md-6">
            お菓子ランキング
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;

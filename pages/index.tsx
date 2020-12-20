import React from 'react';
import { Button, Container } from '@material-ui/core';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useSession } from 'next-auth/client';
import Router from 'next/router';
import OAuthButton from '../components/OAuthButton';

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

const MySwal = withReactContent(Swal);

const handleLogin = () => {
  MySwal.fire({
    title: 'ログインする',
    html: <OAuthButton />,
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonColor: '#d33',
  });
};

const Index: React.FC = () => {

  const [session, loading] = useSession();


  return (
    <>
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
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => Router.push('/new-review')}
        >
          投稿する
        </Button>
        )}
        {!session && (
        <Button
          color="secondary"
          variant="outlined"
          onClick={() => handleLogin()}
        >
          投稿するにはログインが必要です
        </Button>
        )}

      </Container>
    </>
  );
};

export default Index;

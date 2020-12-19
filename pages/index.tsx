import React, { createContext } from 'react';
import { useSession } from 'next-auth/client';
import Top from '../components/top';

const Index: React.FC = () => {
  const [session, loading] = useSession();
  return (
    <>
      <Top session={session} />
    </>
  );
};

export default Index;

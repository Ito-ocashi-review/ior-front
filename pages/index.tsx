import React, { createContext } from 'react';
import { useSession } from 'next-auth/client';
import Top from '../components/top';

const Index: React.FC = () => {
  return (
    <Top />
  );
};

export default Index;

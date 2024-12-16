import { VStack } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import RecentTransactions from './components/RecentTransactionsTab';

const page = () => {
  return (
    <VStack align={'stretch'} w={'full'} h={'full'} spacing={8}>
      <Header />
      <RecentTransactions />
    </VStack>
  );
};

export default page;

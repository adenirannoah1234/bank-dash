import { VStack, Box } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import RecentTransactions from './components/RecentTransactionsTab';

const Page = () => {
  return (
    <VStack
      align="stretch"
      w="full"
      h="full"
      // spacing={8}
      // px={{ base: 4, md: 6, lg: 8 }}
      maxW="100vw"
    >
      <Header />
      <RecentTransactions />
    </VStack>
  );
};

export default Page;

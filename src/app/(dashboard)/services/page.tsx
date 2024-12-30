import { Box, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header';
import ServiceHeader from './components/header';
import BankServiceList from './components/BankServiceList';
import BaseBankServiceList from './components/BaseBankServiceList';

const page = () => {
  return (
    <Stack spacing={10}>
      <ServiceHeader />
      <Stack>
        <Box display={{ base: 'none', md: 'block' }}>
          <BankServiceList />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <BaseBankServiceList />
        </Box>
      </Stack>
    </Stack>
  );
};

export default page;

'use client';

import {
  Box,
  Flex,
  HStack,
  InputLeftElement,
  InputGroup,
  VStack,
  Input,
} from '@chakra-ui/react';
import Image from 'next/image';
import Header from './components/Header';
// import ChartOne from './components/ChartOne';
import DashboardBarChart from './components/charts/DashboardBarChart';
import DashboardPieChart from './components/charts/DashboardPieChart';
import DashboardSplineChart from './components/charts/DashboardSplineChart';
import SendFunds from './components/QuickTransfer';
import { Search } from 'lucide-react';
import { useSession } from 'next-auth/react';
// import PieCharts from './components/PieCharts';

export default function Home() {
  // const { data: session } = useSession();
  // const token = session?.user?.token;
  // console.log('token', token);
  return (
    <VStack
      align={'stretch'}
      w={'full'}
      h={'full'}
      spacing={8}
      // bg={{ base: 'white', lg: 'auto' }}
    >
      <Box w={'325px'} mx={'auto'} display={{ base: 'flex', lg: 'none' }}>
        <InputGroup size={'md'}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search size={18} />}
            // mt={10}
            paddingLeft={'0.8rem'}
            color={'#b2c2dbff'}
          />
          <Input
            placeholder="Search for something"
            paddingLeft={'2.5rem'}
            bg={'#f5f7faff'}
            borderRadius={'200px'}
            color={'#b2c2dbff'}
            size={'md'}
            // sx={{
            //   color: '#b2c2dbff',
            // }}
          />
        </InputGroup>
      </Box>
      <Header />
      {/* <ChartOne /> */}
      {/* <PieCharts /> */}
      <Flex
        gap={5}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box w={{ base: '100%', lg: '650px' }}>
          <DashboardBarChart />
        </Box>
        <Box w={{ base: '100%', lg: '350px' }}>
          <DashboardPieChart />
        </Box>
      </Flex>
      <Flex
        gap={5}
        direction={{ base: 'column', lg: 'row' }}
        align={'center'}
        pb={{ base: '30px', lg: 0 }}
      >
        <SendFunds />
        <DashboardSplineChart />
      </Flex>
    </VStack>
  );
}

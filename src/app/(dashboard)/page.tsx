'use client';

import {
  Box,
  Flex,
  InputLeftElement,
  InputGroup,
  VStack,
  Input,
  Container,
} from '@chakra-ui/react';
import Image from 'next/image';
import Header from './components/Header';
import DashboardBarChart from './components/charts/DashboardBarChart';
import DashboardPieChart from './components/charts/DashboardPieChart';
import DashboardSplineChart from './components/charts/DashboardSplineChart';
import SendFunds from './components/QuickTransfer';
import { Search } from 'lucide-react';
import { useSession } from 'next-auth/react';

export default function Home() {
  return (
    <VStack
      align="stretch"
      w="full"
      h="full"
      spacing={8}
      maxW="100vw"
      // px={{ base: 4, md: 6, lg: 8 }}
    >
      <Box
        w="full"
        maxW="325px"
        mx="auto"
        display={{ base: 'flex', lg: 'none' }}
      >
        <InputGroup size="md">
          <InputLeftElement
            pointerEvents="none"
            children={<Search size={18} />}
            paddingLeft="0.8rem"
            color="#b2c2dbff"
          />
          <Input
            placeholder="Search for something"
            paddingLeft="2.5rem"
            bg="#f5f7faff"
            borderRadius="200px"
            color="#b2c2dbff"
            size="md"
          />
        </InputGroup>
      </Box>

      <Header />

      <Flex
        w="full"
        gap={5}
        direction={{ base: 'column', lg: 'row' }}
        align="stretch"
      >
        <Box flex={{ lg: '3' }} w="full">
          <DashboardBarChart />
        </Box>
        <Box flex={{ lg: '2' }} w="full">
          <DashboardPieChart />
        </Box>
      </Flex>

      <Flex
        w="full"
        gap={5}
        direction={{ base: 'column', lg: 'row' }}
        align="stretch"
        pb={{ base: '30px', lg: 0 }}
      >
        <Box flex={{ lg: '1' }} w="full">
          <SendFunds />
        </Box>
        <Box flex={{ lg: '2' }} w="full">
          <DashboardSplineChart />
        </Box>
      </Flex>
    </VStack>
  );
}

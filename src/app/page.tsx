import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import Header from './components/Header';
// import ChartOne from './components/ChartOne';
import DashboardBarChart from './components/charts/DashboardBarChart';
import DashboardPieChart from './components/charts/DashboardPieChart';
import DashboardSplineChart from './components/charts/DashboardSplineChart';
import SendFunds from './components/QuickTransfer';
// import PieCharts from './components/PieCharts';

export default function Home() {
  return (
    <VStack align={'stretch'} w={'full'} h={'full'} spacing={8}>
      <Header />
      {/* <ChartOne /> */}
      {/* <PieCharts /> */}
      <Flex gap={5}>
        <Box w={'650px'}>
          <DashboardBarChart />
        </Box>
        <Box w={'350px'}>
          <DashboardPieChart />
        </Box>
      </Flex>
      <Flex gap={5}>
        <SendFunds />
        <DashboardSplineChart />
      </Flex>
    </VStack>
  );
}

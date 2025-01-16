'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const SplineAreaChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const DashboardSplineChart = () => {
  const options: ApexCharts.ApexOptions = {
    series: [
      {
        name: 'Balance',
        data: [0, 260, 280, 220, 460, 780, 210, 590, 620],
      },
    ],
    chart: {
      height: 320,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#1713f2ff'],
      width: 4,
    },
    fill: {
      colors: ['#d9e2ffff'],
      type: 'solid',
      opacity: 0.8,
    },
    xaxis: {
      type: 'category',
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
      labels: {
        style: {
          colors: '#64748B',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#64748B',
          fontSize: '18px',
        },
      },
    },
    tooltip: {
      x: {
        format: 'MMM',
      },
    },
    grid: {
      show: true,
      borderColor: '#E2E8F0',
      strokeDashArray: 6,
    },

    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 280,
          },
        },
      },
    ],
  };

  return (
    <Box minW={{ base: '100%', lg: '500px', xl: '600px' }}>
      <Heading
        as="h3"
        fontSize={'1.375rem'}
        fontWeight={'semibold'}
        mb={4}
        color={'#343d6bff'}
      >
        Balance History
      </Heading>

      <Box bg={'white'} borderRadius={'3xl'} shadow={'lg'}>
        <Box p={4}>
          <SplineAreaChart
            options={options}
            series={options.series}
            type="area"
            height={225}
            width={'100%'}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardSplineChart;

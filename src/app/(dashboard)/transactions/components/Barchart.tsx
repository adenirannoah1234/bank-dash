'use client';

import React from 'react';
// import Chart from 'react-apexcharts';
import { Box, Text } from '@chakra-ui/react';
import type { ApexOptions } from 'apexcharts';

import dynamic from 'next/dynamic';

// Dynamically import ApexCharts for SSR compatibility in Next.js
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
const BarChart: React.FC = () => {
  const chartData = [
    {
      name: 'Revenue',
      data: [8000, 13500, 9000, 4000, 12500, 9500],
    },
  ];

  // Chart configuration options
  const chartOptions: ApexOptions = {
    chart: {
      id: 'monthly-sales',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        horizontal: false,
        columnWidth: '70%',
      },
    },
    colors: [
      ({ dataPointIndex }: any) =>
        dataPointIndex === 4 ? '#16dbcbff' : '#edf0f7ff',
    ],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
    },
    yaxis: { show: false },
    grid: { show: false },
    fill: {
      opacity: 0.8,
    },
    states: {
      //   active: { filter: { type: 'none' } },
    },
  };

  return (
    <Box
      bg="white"
      //   p={3}
      borderRadius="3xl"
      boxShadow="sm"
      maxW="350px"
      mx="auto"
      mt={4}
      position="relative"
    >
      <Chart
        options={chartOptions}
        series={chartData}
        type="bar"
        // height={225}
      />

      <Text
        color="#16dbcbff"
        fontSize="lg"
        fontWeight="bold"
        textAlign="center"
        position="absolute"
        top="20px"
        left="40%"
        transform="translateX(72px)"
        zIndex="10"
      >
        $12,500
      </Text>
    </Box>
  );
};

export default BarChart;

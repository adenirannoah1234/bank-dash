import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Heading } from '@chakra-ui/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardBarChart = () => {
  const weeklyActivityOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    colors: ['#1713f2', '#16dbcb'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '60%',
        borderRadius: 5,
        distributed: false,
        rangeBarOverlap: false,
        barHeight: '80%',
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      labels: {
        style: {
          fontSize: '14px',
          colors: ['#666'],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '14px',
          colors: ['#666'],
        },
      },
    },
    grid: {
      borderColor: '#e0e0e0',
      strokeDashArray: 5,
      yaxis: {
        lines: { show: true },
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      markers: {
        size: 10,
        strokeWidth: 2,
        shape: 'circle',
        fillColors: ['#16dbcb', '#ff82ac'],
      },
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
  };

  const weeklyActivitySeries = [
    {
      name: 'Deposit',
      data: [480, 350, 330, 480, 150, 400, 400],
    },
    {
      name: 'Withdraw',
      data: [250, 130, 260, 380, 250, 250, 350],
    },
  ];

  return (
    <Box w="100%" h="100%">
      <Heading
        as="h3"
        fontSize="1.375rem"
        fontWeight="semibold"
        mb={4}
        color="#343d6b"
      >
        Weekly Activity
      </Heading>
      <Box
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="3xl"
        p={4}
        bg="white"
        boxShadow="md"
      >
        <Chart
          options={weeklyActivityOptions}
          series={weeklyActivitySeries}
          type="bar"
          height={288}
        />
      </Box>
    </Box>
  );
};

export default DashboardBarChart;

'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Heading } from '@chakra-ui/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const DashboardPieChart = () => {
  const expenseStatisticsOptions: ApexCharts.ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Bill Expense', 'Others', 'Investment', 'Entertainment'],
    colors: ['#fc7a00ff', '#1713f2ff', '#fb00ffff', '#333b69ff'],
    dataLabels: {
      enabled: true,
      formatter: function (val: number, opts: any) {
        return `${val.toFixed(0)}%\n${opts.w.config.labels[opts.seriesIndex]}`;
      },
      textAnchor: 'middle',
      style: {
        fontSize: '12px',
        colors: ['#fff'],
        fontWeight: 'bold',
        fontFamily: 'inherit',
      },
      dropShadow: {
        enabled: false,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
        },
        dataLabels: {
          offset: -30,
          minAngleToShowLabel: 10,
        },
      },
    },
    stroke: {
      colors: ['#fff'],
      width: 7,
    },
    legend: {
      show: false,
    },
  };

  const expenseStatisticsSeries = [15, 35, 20, 30];

  return (
    <Box>
      <Heading
        as="h3"
        fontSize={'1.375rem'}
        fontWeight={'semibold'}
        mb={4}
        color={'#343d6bff'}
      >
        Expense Statistics
      </Heading>
      <Box
        border="1px"
        borderColor="gray.200"
        borderRadius="3xl"
        p={4}
        bg="white"
        boxShadow="md"
      >
        <Chart
          options={expenseStatisticsOptions}
          series={expenseStatisticsSeries}
          type="pie"
          height={372}
        />
      </Box>
    </Box>
  );
};

export default DashboardPieChart;

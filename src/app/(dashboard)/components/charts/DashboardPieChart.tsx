import React from 'react';
import dynamic from 'next/dynamic';
import { Box, Heading, VStack } from '@chakra-ui/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ExpensePieChart = () => {
  const chartData: any = {
    series: [30, 15, 20, 35],
    options: {
      chart: {
        type: 'pie',
        background: 'transparent',
      },
      labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
      colors: ['#343d6bff', '#fc7a00ff', '#fb00ffff', '#1713f2ff'],
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: number, opts: any) {
          const label = opts.w.config.labels[opts.seriesIndex];
          return [val.toFixed(0) + '%', label];
        },
        style: {
          fontSize: '16px',
          fontWeight: '500',
          colors: ['#fff', '#fff'],
        },
        textAnchor: 'middle',
        distributed: true,
        offsetY: 0,
        dropShadow: {
          enabled: false,
        },
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          expandOnClick: false,
          offsetX: 0,
          offsetY: 0,
          customScale: 1,
          dataLabels: {
            offset: -25,
          },
          donut: {
            size: '0%',
          },
          gap: '9%',
        },
      },
      stroke: {
        show: true,
        width: 3,
        colors: ['#fff'],
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: (val: number) => `${val}%`,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
              height: 367,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
    },
  };

  return (
    <Box w="100%" h="100%">
      <Heading
        as="h3"
        fontSize="1.375rem"
        fontWeight="semibold"
        mb={4}
        color="#343d6b"
      >
        Expense Statistics
      </Heading>
      <VStack
        bg="white"
        minW="350px"
        h={{ base: '350px', lg: '323px' }}
        position="relative"
        mt={4}
        borderRadius={'3xl'}
        boxShadow={'md'}
      >
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width="100%"
          height="323"
        />
      </VStack>
    </Box>
  );
};

export default ExpensePieChart;

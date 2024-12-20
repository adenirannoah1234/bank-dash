import React from 'react';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';

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
      colors: ['#3B4B84', '#FF6B00', '#E100FF', '#0066FF'],
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
            offset: -25, // Moves labels closer to the edge
          },
          donut: {
            size: '0%',
          },
          gap: '9%', // Adds space between pie segments
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
    <Box bg="white" w="350px" h="367px" position="relative">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="350"
        height="367"
      />
    </Box>
  );
};

export default ExpensePieChart;

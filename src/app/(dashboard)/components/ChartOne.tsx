// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';
// import { Box, Heading, Flex } from '@chakra-ui/react';

// // Dynamically import ApexCharts for SSR compatibility in Next.js
// const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

// const ChartOne = () => {
//   // Weekly Activity Chart Options
//   const weeklyActivityOptions: ApexCharts.ApexOptions = {
//     chart: {
//       type: 'bar',
//       toolbar: {
//         show: false,
//       },
//     },
//     colors: ['#1713f2ff', '#16dbcbff'],
//     plotOptions: {
//       bar: {
//         horizontal: false,
//         columnWidth: '30%', // Align bars to the design
//         borderRadius: 5,
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//       labels: {
//         style: {
//           fontSize: '14px',
//           colors: ['#666'],
//         },
//       },
//     },
//     yaxis: {
//       labels: {
//         style: {
//           fontSize: '14px',
//           colors: ['#666'],
//         },
//       },
//     },
//     grid: {
//       borderColor: '#e0e0e0',
//       strokeDashArray: 5,
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     legend: {
//       position: 'top',
//       horizontalAlign: 'right',
//       markers: {
//         size: 10,
//       },
//     },
//   };

//   const weeklyActivitySeries = [
//     {
//       name: 'Deposit',
//       data: [500, 200, 300, 400, 100, 200, 300],
//     },
//     {
//       name: 'Withdraw',
//       data: [400, 300, 200, 500, 100, 300, 400],
//     },
//   ];

//   // Expense Statistics Chart Options
//   const expenseStatisticsOptions: ApexCharts.ApexOptions = {
//     chart: {
//       type: 'pie',
//     },
//     labels: ['Bill Expense', 'Others', 'Investment', '  Entertainment'],
//     colors: ['#fc7a00ff', '#1713f2ff', '#fb00ffff', '#333b69ff'],
//     dataLabels: {
//       enabled: true,
//       formatter: function (val: number, opts: any) {
//         return `${opts.w.config.labels[opts.seriesIndex]}: ${val.toFixed(0)}%`;
//       },
//       style: {
//         fontSize: '12px',
//         colors: ['#fff'], // Ensure visibility inside slices
//       },
//     },
//     plotOptions: {
//       pie: {
//         donut: {
//           size: '75%', // Match design
//         },
//       },
//     },
//     stroke: {
//       colors: ['#fff'],
//       width: 7, // Adds separation between slices
//     },
//     legend: {
//       show: false, // Hide legend since labels are inside the chart
//     },
//   };

//   const expenseStatisticsSeries = [15, 35, 20, 30];

//   return (
//     <Box>
//       <Flex gap={3}>
//         {/* Weekly Activity Chart (70% width) */}
//         <Box
//           // flex="6"
//           w={'730px'}
//           border="1px"
//           borderColor="gray.200"
//           borderRadius="lg"
//           p={4}
//           bg="white"
//           boxShadow="md"
//         >
//           {/* <Heading as="h3" size="md" mb={4}>
//             Weekly Activity
//           </Heading> */}
//           <Chart
//             options={weeklyActivityOptions}
//             series={weeklyActivitySeries}
//             type="bar"
//             height={322}
//           />
//         </Box>

//         {/* Expense Statistics Chart (30% width) */}
//         <Box
//           // flex="4"
//           w={'350px'}
//           border="1px"
//           borderColor="gray.200"
//           borderRadius="lg"
//           p={4}
//           bg="white"
//           boxShadow="md"
//         >
//           {/* <Heading as="h3" size="md" mb={4} textAlign="center">
//             Expense Statistics
//           </Heading> */}
//           <Chart
//             options={expenseStatisticsOptions}
//             series={expenseStatisticsSeries}
//             type="pie"
//             height={322}
//           />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default ChartOne;

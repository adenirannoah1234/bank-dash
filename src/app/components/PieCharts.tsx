// 'use client';

// import React from 'react';
// import dynamic from 'next/dynamic';

// const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

// const ExpenseStatisticsPieChart = () => {
//   const options: ApexCharts.ApexOptions = {
//     chart: {
//       width: 380,
//       type: 'pie',
//     },
//     colors: ['#1713f2ff', '#fb00ffff', '#343d6bff', '#fc7a00ff'],
//     series: [35, 20, 30, 15],
//     labels: ['Others', 'Investment', 'Entertainment', 'Bill Expense'],
//     dataLabels: {
//       enabled: true,
//       style: {
//         fontSize: '16px',
//         fontWeight: 'bold',
//         colors: ['#ffffff'],
//       },
//       formatter: function (val: any, opts: any) {
//         return `${val.toFixed(0)}%\n${opts.w.config.labels[opts.seriesIndex]}`;
//       },
//     },
//     plotOptions: {
//       pie: {
//         expandOnClick: false,
//         donut: {
//           size: '80%',
//           background: 'transparent',
//           labels: {
//             show: false,
//           },
//         },
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           dataLabels: {
//             style: {
//               fontSize: '12px',
//             },
//           },
//         },
//       },
//     ],
//   };

//   return (
//     <ApexCharts
//       options={options}
//       series={options.series}
//       type="pie"
//       height={400}
//     />
//   );
// };

// export default ExpenseStatisticsPieChart;

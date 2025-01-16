'use client'

import dynamic from 'next/dynamic';

export const LineChart = () => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    
    const sharpLineOptions: ApexCharts.ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false },
        },
        colors: ['#1713f2'], 
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
            labels: {
                style: {
                    fontSize: '14px',
                    colors: ['#666'],
                },
            },
        },
        yaxis: {
            min: 0,
            labels: {
                style: {
                    fontSize: '14px',
                    colors: ['#666'],
                },
                formatter: (value) => `$${value.toLocaleString()}`,
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
            show: false,
        },
        stroke: {
            show: true,
            width: 3,
            curve: 'straight', 
            colors: ['#EDA10D'],
        },
        markers: {
            size: 5,
            colors: ['#00000080'],
        },
    };


    const zigzagLineOptions: ApexCharts.ApexOptions = {
        chart: {
            type: 'line',
            toolbar: { show: false },
        },
        colors: ['#1713f2'],
        dataLabels: { enabled: false },
        xaxis: {
            categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
            labels: {
                style: {
                    fontSize: '14px',
                    colors: ['#666'],
                },
            },
        },
        yaxis: {
            min: 0,
            labels: {
                style: {
                    fontSize: '14px',
                    colors: ['#666'],
                },
                formatter: (value) => `$${value.toLocaleString()}`,
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
            show: false,
        },
        stroke: {
            show: true,
            width: 3, 
            curve: 'smooth',
            colors: ['#16DBCC'],
        },
    };
    
    const lineData = [10000, 17000, 28000, 21000, 25000, 16000];

    return (
        <div className="md:flex space-x-6 space-y-4 md:space-y-0 my-10">
            {/* Sharp Line Chart */}
            <div className='md:w-1/2'>
                <p className='text-[#333B69] text-xl font-bold mb-4'>Yearly Total Investment</p>
                <div className="bg-white">
                    <Chart options={sharpLineOptions} series={[{ data: lineData }]} type="line" height={350} />
                </div>
            </div>

            {/* Smooth Line Chart */}
            <div className='md:w-1/2'>
            <p className='text-[#333B69] text-xl font-bold mb-4'>Monthly Revenue</p>
                <div className="bg-white">
                    <Chart options={zigzagLineOptions} series={[{data: lineData }]} type="line" height={350} />
                </div>
            </div>
        </div>
    );
};

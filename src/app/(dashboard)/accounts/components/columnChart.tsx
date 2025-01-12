'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image';

export const ColumnChart = () => {

    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

    const debitAndCreditOptions: ApexCharts.ApexOptions = {
        chart: {
          type: 'bar',
          toolbar: { show: false },
        },
        colors: ['#1713f2', '#FCAA0B'],
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
            fillColors: ['#1713f2', '#FCAA0B'],
          },
        },
        stroke: {
          show: true,
          width: 7,
          colors: ['transparent'],
        },
      };
    
      const debitAndCreditSeries = [
        {
          name: 'Debit',
          data: [250, 140, 120, 480, 350, 340, 360],
        },
        {
          name: 'Credit',
          data: [480, 350, 280, 220, 480, 130, 450],
        },
      ];

      interface Item {
        logo: string;
        name: string;
        daysAgo: number;
        amount: number;
      }
      
      const items: Item[] = [
        {
          logo: '/apple.svg',
          name: 'Apple Store',
          daysAgo: 5,
          amount: 450,
        },
        {
          logo: '/user.svg',
          name: 'Michael',
          daysAgo: 2,
          amount: 160,
        },
        {
          logo: '/playstation.svg',
          name: 'Playstation',
          daysAgo: 5,
          amount: 1085,
        },
        {
          logo: '/user.svg',
          name: 'William',
          daysAgo: 10,
          amount: 90,
        },
      ];
      
  return (
    <div className="my-10 md:grid grid-cols-4 xl:grid-cols-3 gap-10">
      <div className='md:col-span-2'>
        <h2 className="text-2xl font-semibold mb-6 text-[#333B69]">Debit & Credit Overview</h2>
        <div className='bg-white py-1 rounded-2xl shadow-md'>
            <Chart options={debitAndCreditOptions} series={debitAndCreditSeries} type="bar" height={350} />
        </div>
      </div>

      <div className='md:col-span-2 xl:col-span-1 max-w-md'>
        <h2 className="text-2xl font-semibold mb-6 text-[#333B69]">Invoices Sent</h2>
        <div className="bg-white p-6 rounded-2xl shadow-md max-w-sm sm:max-w-md">
        <div>
            {items.map((item, index) => (
            <div
                key={index}
                className="flex items-center justify-between py-4"
            >
                <div className="flex items-center space-x-4">
                <Image src={item.logo} alt={item.name} width={40} height={40} />
                <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.daysAgo} days ago</p>
                </div>
                </div>
                <p className="text-lg text-[#718EBF]">${item.amount}</p>
            </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  )
}

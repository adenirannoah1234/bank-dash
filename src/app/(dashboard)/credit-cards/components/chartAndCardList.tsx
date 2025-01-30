'use client'

import dynamic from 'next/dynamic';
import Image from 'next/image';

const ChartAndList = () => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const options: ApexCharts.ApexOptions = {

      series: [40, 44, 41, 55],
    chart: {
      type: 'donut',
    },
    
    labels: ['DBL Bank', 'BRC Bank', 'ABM Bank', 'MCP Bank'],
    plotOptions: {
      pie: {
        donut: {
          size: '35%',
        },
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      itemMargin: {
        horizontal: 50,
        vertical: 5
      },
    },
}

interface CardList {
    logo: string;
    cardType: string;
    bankType: string;
    cardNumber: string;
    nameInCard: string;
  }

const cardList: CardList[] = [
    {
      logo: '/card-type1.svg',
      cardType: 'Secondary',
      bankType: 'DBL Bank',
      cardNumber: '**** **** 5600',
      nameInCard: 'William',
    },
    {
      logo: '/card-type2.svg',
      cardType: 'Secondary',
      bankType: 'BRC Bank',
      cardNumber: '**** **** 4300',
      nameInCard: 'Michel',
    },
    {
      logo: '/card-type3.svg',
      cardType: 'Secondary',
      bankType: 'ABM Bank',
      cardNumber: '**** **** 7560',
      nameInCard: 'Edward',
    },
  ];

  return (
    <div className='my-10 md:grid grid-cols-3 gap-6'>
     <div className='md:col-span-1 mb-4 md:mb-0'>
      <p className='text-[#333B69] text-xl font-bold pb-2'>Card Expense Statistics</p>
        <div className='bg-white p-2 rounded-2xl'>
          <Chart options={options} series={options.series} type="donut" height={350} />
        </div>
     </div>

      <div className='md:col-span-2'>
        <p className='text-[#333B69] text-xl font-bold'>Card List</p>
        <div className="overflow-x-auto py-2 rounded-xl text-xs lg:text-base">
            {cardList.map((list, index) => (
                <div key={index} className="flex items-center bg-white p-4 mb-4 rounded-xl shadow-md">
                <div className="flex items-center">
                    <Image src={list.logo} alt='' width={40} height={40} />
                </div>
                <div className="flex-1 px-4">
                    <p>Card Type</p>
                    <p className="text-xs text-[#718EBF]">{list.cardType}</p>
                </div>
                <div className="px-4">
                    <p>Bank</p>
                    <p className="text-xs text-[#718EBF]">{list.bankType}</p>
                </div>
                <div className="px-4">
                    <p>Card Number</p>
                    <p className="text-xs text-[#718EBF]">{list.cardNumber}</p>
                </div>
                <div className="px-4">
                    <p>Namein Card</p>
                    <p className="text-xs text-[#718EBF]">{list.nameInCard}</p>
                </div>
                <div className="px-4">
                    <button className='text-blue-500'>View Details</button>
                </div>
                </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default ChartAndList;

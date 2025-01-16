import { Stock } from '@/app/constants/types';
import Image from 'next/image';
import React from 'react'

const stock: Stock[] = [
    { name: 'Trivago', price: 520, returns: 5, added: true },
    { name: 'Canon', price: 480, returns: 10, added: true },
    { name: 'Uber Food', price: 350, returns: 3, added: false },
    { name: 'Nokia', price: 940, returns: 2, added: true },
    { name: 'Tiktok', price: 670, returns: 12, added: false },
]; 

export const InvestmentAndStock = () => {

    interface Investment {
        logo: string;
        name: string;
        service: string;
        amount: number;
        color: string;
        percentage: number;
      }

      const investments: Investment[] = [
        { logo: '/apple-store.svg', name: 'Apple Store', service: 'E-commerce, Marketplace', amount: 54000, color: '#16dbaaff', percentage: 16},
        { logo: '/samsung.svg', name: 'Samsung Mobile', service: 'E-commerce, Marketplace',amount: 25300, color: '#ff5c74ff', percentage: 4},
        { logo: '/tesla.svg', name: 'Tesla Motors', service: 'E-commerce, Marketplace', amount: 8200, color: '#16dbaaff', percentage: 25},
      ];

  return (
    <div className='mt-10'>
        <div className="md:grid grid-cols-5 xl:grid-cols-3 gap-6">
        {/* My Investment */}
          <div className='md:col-span-3 xl:col-span-2'>
          <p className='text-[#333B69] text-xl font-bold mb-4'>My Investment</p>
          <div className="overflow-x-auto py-6 rounded-xl">
              {investments.map((investment, index) => (
                  <div key={index} className="flex items-center bg-white p-4 mb-4 rounded-xl shadow-md">
                  <div className="flex items-center">
                      <Image src={investment.logo} alt={investment.name} width={40} height={40} />
                  </div>
                  <div className="flex-1 px-4">
                      <p>{investment.name}</p>
                      <p className="text-xs text-[#718EBF]">{investment.service}</p>
                  </div>
                  <div className="text-right px-4">
                      <p>${investment.amount}</p>
                      <p className="text-xs text-[#718EBF]">Investment Value</p>
                  </div>
                  <div className="text-right px-4" style={{ color: investment.color }}>
                      <p>{investment.percentage}%</p>
                      <p className="text-xs text-[#718EBF]">Return Value</p>
                  </div>
                  </div>
              ))}
          </div>
          </div>
    
            {/* Trending Stock */}
          <div className='md:col-span-2 xl:col-span-1'>
            <p  className='text-[#333B69] text-xl font-bold mb-4'>Trending Stock</p>
            <div className="overflow-x-auto bg-white py-6 rounded-xl">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className='text-[#718EBF]'>
                    <th className="px-4 py-2 text-left">SL No</th>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Return</th>
                  </tr>
                </thead>
                <tbody>
                  {stock.map((s, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">0{index+1}.</td>
                      <td className="px-4 py-2">{s.name}</td>
                      <td className="px-4 py-2">${s.price}</td>
                      <td
                        className="px-4 py-2"
                        style={{ color: s.added === true ? 'green' : 'red' }}
                      >
                        {s.added ? `+${s.returns}% ` : `-${Math.abs(s.returns)}%`}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
          </div>
        </div>
      </div>
  )
}

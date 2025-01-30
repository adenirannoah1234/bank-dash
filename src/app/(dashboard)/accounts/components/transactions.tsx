import Image from 'next/image';
import React from 'react'
import { VirtualCard } from '../../components/Card';

export const AccountTransactions = () => {
    interface Transaction {
        logo: string;
        name: string;
        date: string;
        service: string;
        cardNumber: number;
        amount: number;
        completed: boolean;
        color: string;
      }

      const transactions: Transaction[] = [
        { logo: '/my-balance.svg', name: 'Spotify Subscription', date: '25-01-2021', service: 'Shopping', cardNumber: 1234567,  amount: 150, color: '#ff5c74ff', completed: false },
        { logo: '/income.svg', name: 'Mobile Service', date: '252021-01-02', service: 'Service', cardNumber: 1234567, amount: 340, color: '#ff5c74ff', completed: true },
        { logo: '/expense.png', name: 'Emilly Wilson', date: '25-01-2021', service: 'Transfer', cardNumber: 1234567, amount: 780, color: '#16dbaaff', completed: true },
      ];
  
  return (
    <div className='mt-10'>
        <div className="md:grid grid-cols-4 xl:grid-cols-3 gap-6">
        {/* Latest transaction */}
            <div className='md:col-span-2'>
            <p className='text-[#333B69] text-xl font-bold mb-4'>Last Transaction</p>
            <div className="overflow-x-auto bg-white py-6 rounded-xl">
                <table className="min-w-full table-auto">
                <tbody>
                    {transactions.map((transaction, index) => (
                    <tr key={index} className="">
                        <td className=" px-4 py-2">
                        <Image src={transaction.logo} alt={transaction.name} width={40} height={40} />
                        </td>
                        <td className="px-4 py-2">
                        <p>{transaction.name}</p>
                        <p className="text-xs text-gray-500">{transaction.date}</p>
                        </td>
                        <td className="px-4 py-2">{transaction.service}</td>
                        <td className="px-4 py-2">{transaction.cardNumber}</td>
                        <td className='px-4 py-2'>{transaction.completed ? 'Completed' : 'Pending'}</td>
                        <td className='px-4 py-2' style={{ color: transaction.color }}>${transaction.amount}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>

        {/* ATM Card */}
        <div className='md:col-span-2 xl:col-span-1'>
                <p className="text-[#333B69] text-xl font-bold mb-4">My Card</p>
                <VirtualCard balance={1200} cardHolder='Eddy Cusuma' expiryDate='12/22' cardNumber='3778 **** **** 1234' textColor='text-white' bgColor="bg-[#2D60FF]" bgColor2='bg-[#539BFF]' />
        </div>
        </div>
    </div>
    )
}

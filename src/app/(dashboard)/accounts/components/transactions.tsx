import Image from 'next/image';
import React from 'react'

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
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Latest transaction */}
            <div className='col-span-2'>
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
        <div>
        <div className='col-span-1'>
                <p className="text-[#333B69] text-xl font-bold mb-4">My Card</p>
            <div className="bg-[#2D60FF] rounded-3xl shadow-md max-w-xs sm:max-w-sm relative text-white">
                <div className="flex items-center justify-between p-6">
                <div>
                    <p className="text-sm">Balance</p>
                    <p className="text-xl">$1,200</p>
                </div>
                <div className="mr-4">
                    <Image src="/Chip_Card.svg" alt="ATM Card" width={50} height={50} />
                </div>
                </div>
                <div className='px-6 pb-2 flex justify-between'>
                    <div>
                        <p className="text-sm">CARD HOLDER</p>
                        <p className="text-xl">Eddy Cusuma</p>
                    </div>
                    <div>
                        <p>VALID THRU</p>
                        <p>12/22</p>
                    </div>
                </div>
                <div className='bg-[#539BFF] w-[100%] rounded-b-3xl p-3 flex justify-between'>
                    <p className='font-semibold'>3778 **** **** 1234</p>
                    <Image src='/card_logo.svg' alt='card-logo' width={54} height={54} />
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    )
}

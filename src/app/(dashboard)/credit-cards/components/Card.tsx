import Image from 'next/image';
import React from 'react'

export const Card = () => {
    interface CardSettings {
    logo: string;
    name: string;
    info: string;
  }

const cardSettings: CardSettings[] = [
    {
      logo: '/block-card.svg',
      name: 'Block Card',
      info: 'Instantly block your card',
    },
    {
      logo: '/change-code.svg',
      name: 'Change Pic Code',
      info: 'Withdraw without any card',
    },
    {
      logo: '/samsung.svg',
      name: 'Add to Google Pay',
      info: 'Withdraw without any card',
    },
    {
      logo: '/apple.svg',
      name: 'Add to Apple Pay',
      info: 'Withdraw without any card',
    },
    {
      logo: '/apple.svg',
      name: 'Add to Apple Store',
      info: 'Withdraw without any card',
    },
  ];

    return (
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-2/3 mb-6 md:mb-0">
            <p className='text-[#333B69] text-xl font-bold mb-2'>Add New Card</p>
            <div className='p-6 bg-white rounded-xl shadow-md '>
                <h2 className="mb-6 break-words text-[#718EBF]">
                Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances.
                </h2>
                <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="input1" className="font-medium text-sm">Card Type</label>
                    <input id="cardType" type="text" className="p-2 border border-[#DFEAF2] rounded-xl text-sm" placeholder='Classic' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="input2" className="font-medium text-sm">Name On Card</label>
                    <input id="name" type="text" className="p-2 border border-[#DFEAF2] rounded-xl text-sm" placeholder='My Cards' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="input3" className="font-medium text-sm">Card Number</label>
                    <input id="cardNumber" type="number" className="p-2 border border-[#DFEAF2] rounded-xl text-sm" placeholder='**** **** **** ****' />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="input4" className="font-medium text-sm">Expiration Date</label>
                    <input id="expiration" type="text" className="p-2 border border-[#DFEAF2] rounded-xl text-sm" placeholder='25 January 2025' />
                </div>
                </div>
                <button className="w-full md:w-[40%] px-5 py-2 bg-[#1814F3] text-white font-semibold rounded-md hover:bg-blue-700">
                Add Card
                </button>
            </div>
          </div>
    
          {/* Card Setting */}
          <div className="w-full md:w-1/3">
            <p className='text-[#333B69] text-xl font-bold mb-2'>Card Setting</p>
            <div className='bg-white rounded-xl shadow-md'>
                <div className="grid grid-cols-1 gap-6 p-5">
                    {cardSettings.map((item, index) => (
                        <div key={index} className="flex items-center gap-4">
                            <Image src={item.logo} alt={item.name} width={40} height={40} />
                            <div>
                                <p className="font-semibold text-base">{item.name}</p>
                                <p className="text-xs text-[#718EBF]">{item.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
      );
    };


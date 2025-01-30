import Image from 'next/image'
import React from 'react'

interface VirtualCardProps {
    balance: number;  
    cardHolder: string;
    expiryDate: string;
    cardNumber: string;
    textColor: string;
    bgColor: string;
    bgColor2: string;
  }
export const VirtualCard: React.FC<VirtualCardProps> = ({ balance, cardHolder, expiryDate, cardNumber, bgColor, textColor, bgColor2 }) => {
    const formattedBalance = balance.toLocaleString();
  return (
    <div className={`rounded-3xl shadow-md max-w-xs sm:max-w-sm relative text-white ${bgColor}`}>
    <div className={`flex items-center justify-between p-6 ${textColor}`}>
    <div>
        <p className="text-sm">Balance</p>
        <p className="text-xl">${formattedBalance}</p>
    </div>
    <div className="mr-4">
        <Image src="/Chip_Card.svg" alt="ATM Card" width={50} height={50} />
    </div>
    </div>
    <div className={`px-6 pb-2 flex justify-between ${textColor}`}>
        <div>
            <p className="text-sm">CARD HOLDER</p>
            <p className="text-xl">{cardHolder}</p>
        </div>
        <div>
            <p>VALID THRU</p>
            <p>{expiryDate}</p>
        </div>
    </div>
    <div className={`${bgColor2} ${textColor} w-[100%] rounded-b-3xl p-3 flex justify-between`}>
        <p className='font-semibold'>{cardNumber}</p>
        <Image src='/card_logo.svg' alt='card-logo' width={54} height={54} />
    </div>
</div>
  )
}

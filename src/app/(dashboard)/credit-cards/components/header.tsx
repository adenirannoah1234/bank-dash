import React from 'react'
import { VirtualCard } from '../../components/Card'

export const CreditCardsHeader = () => {
  return (
    <div className='overflow-x-auto sm:overflow-x-hidden'>
      <div className='grid grid-cols-3 gap-3 min-w-max'>
          <VirtualCard balance={5756} cardHolder='Eddy Cusuma' expiryDate='12/22' cardNumber='3778 **** **** 1234' textColor='text-white' bgColor="bg-[#2D60FF]" bgColor2='bg-[#539BFF]' />
          <VirtualCard balance={5756} cardHolder='Eddy Cusuma' expiryDate='12/22' cardNumber='3778 **** **** 1234' textColor='text-white' bgColor="bg-[#2D60FF]" bgColor2='bg-[#539BFF]' />
          <VirtualCard balance={5756} cardHolder='Eddy Cusuma' expiryDate='12/22' cardNumber='3778 **** **** 1234' textColor='text-black' bgColor="bg-slate-200" bgColor2="bg-stone-100"/>
      </div>
    </div>
  )
}

import { AccountHeaderList } from '@/app/constants/data'
import Image from 'next/image'
import React from 'react'

export const AccountHeader = () => {
  return (
    <div>
        <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
            {AccountHeaderList.map((list) => (
                <div key={list.id} className="flex gap-3 items-center bg-white p-4 rounded-lg shadow-md">
                    <Image src={list.image} alt={list.name} width={60} height={60} className="w-10 h-10 sm:w-12 sm:h-12"/>
                    <div>
                        <p className="text-lg text-[#718EBF]">{list.name}</p>
                        <p className="font-semibold text-xl">{list.amount}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

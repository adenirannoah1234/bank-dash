'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarLinks } from '../constants/SidebarLinks';
import { useEffect, useState } from 'react';
import Image from 'next/image';
// import Icon from '@chakra-ui/react'

const Sidebar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className="flex flex-col h-screen bg-white p-4 shadow- w-[220px]">
      <div className="flex  items-center justify-center mb-8 gap-2 mt-4">
        <Image src="/bank.png" alt="Bank Dash Logo" width={30} height={30} />
        <h1 className="text-3xl font-bold text-[#343d6bff]">BankDash.</h1>
      </div>

      <ul className="flex flex-col gap-2 ">
        {SidebarLinks.map((link) => {
          const isActive = activePath === link.path;

          return (
            <li
              key={link.name}
              className="relative flex items-center font-medium text-lg "
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute -left-4 h-full w-1 bg-[#2e62ffff] rounded-r-md"></div>
              )}

              <Link
                href={link.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-300 ${
                  isActive
                    ? 'text-[#2e62ffff] font-medium text-lg'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <link.icon size={20} className="mr-2" />
                <p>{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

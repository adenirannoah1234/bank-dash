'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarLinks } from '../../constants/SidebarLinks';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IconButton, Box, Flex, Text } from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { signOut } from 'next-auth/react';

// import Icon from '@chakra-ui/react'
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <Box
      bg="white"
      // color="white"
      p={4}
      // borderRight="1px solid gray.700"
      h="100vh"
      zIndex={999}
      position={{ base: 'fixed', lg: 'static' }}
      width={{ base: '240px', lg: '220px' }}
      display={{ base: isOpen ? 'block' : 'none', lg: 'block' }}
      left={0}
      top={0}
      transform={{
        base: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        lg: 'none',
      }}
      transition="transform 0.3s ease-in-out"
      overflowY="scroll"
      // css={{
      //   '&::-webkit-scrollbar': {
      //     width: '8px',
      //     backgroundColor: '#292929ff',
      //   },
      //   '&::-webkit-scrollbar-thumb': {
      //     borderRadius: '8px',
      //     backgroundColor: '#555',
      //   },
      // }}
    >
      <IconButton
        aria-label="Close menu"
        icon={<IoMdClose size={24} />}
        size="md"
        variant="ghost"
        position="absolute"
        right={2}
        top={2}
        display={{ base: 'flex', lg: 'none' }}
        // color="white"
        _hover={{ bg: 'white' }}
        onClick={onClose}
      />

      <div className="flex items-center justify-center mb-8 gap-2 mt-10 sm:mt-8 md:mt-10 lg:mt-4">
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
                <p style={{ whiteSpace: 'nowrap' }}>{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* </div> */}
      <Flex
        onClick={handleSignOut}
        justifyContent={'center'}
        alignItems={'center'}
        cursor={'pointer'}
      >
        <Text cursor={'pointer'}>Logout</Text>
      </Flex>
    </Box>
  );
};

export default Sidebar;

import React from 'react';
import {
  IconButton,
  Avatar,
  Input,
  InputLeftElement,
  InputGroup,
  Box,
  HStack,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { TbSettings } from 'react-icons/tb';
import { BellDot, Search } from 'lucide-react';
import { usePathname } from 'next/navigation';

const TopNav = () => {
  const pathname = usePathname();
  // this is the function to get the current page name so i can display it in the navbar
  const getPageName = () => {
    if (pathname === '/') return 'Dashboard';
    return (
      pathname.substring(1).charAt(0).toUpperCase() + pathname.substring(2)
    );
  };
  return (
    <Flex
      justifyContent={'space-between'}
      alignItems={'center'}
      h={'6.25rem'}
      px={'2rem'}
    >
      <Heading as="h1" size="lg">
        {getPageName()}
      </Heading>
      <HStack spacing={'1.5rem'}>
        <InputGroup size={'md'}>
          <InputLeftElement
            pointerEvents="none"
            children={<Search size={18} />}
            // mt={10}
            paddingLeft={'0.8rem'}
            color={'#b2c2dbff'}
          />
          <Input
            placeholder="Search for something"
            paddingLeft={'2.5rem'}
            bg={'#f5f7faff'}
            borderRadius={'200px'}
            color={'#b2c2dbff'}
            size={'md'}
            // sx={{
            //   color: '#b2c2dbff',
            // }}
          />
        </InputGroup>

        <IconButton
          aria-label="Settings"
          icon={<TbSettings size={25} />}
          variant={'ghost'}
          bg={'#f5f7faff'}
          color={'#718ebfff'}
          borderRadius={'full'}
          size={'lg'}
        />
        <IconButton
          aria-label="Notifications"
          icon={<BellDot />}
          variant={'ghost'}
          bg={'#f5f7faff'}
          borderRadius={'full'}
          color={'#ff5c74ff'}
          size={'lg'}
        />
        <Avatar
          size={'md'}
          name={'HP'}
          src={'/christiana.png'}
          borderRadius={'full'}
        />
      </HStack>
    </Flex>
  );
};

export default TopNav;

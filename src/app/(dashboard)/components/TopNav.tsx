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
import { RxHamburgerMenu } from 'react-icons/rx';

interface TopNavProps {
  onMenuClick: () => void;
}
const TopNav = ({ onMenuClick }: TopNavProps) => {
  const pathname = usePathname();
  // this is the function to get the current page name so i can display it in the navbar
  const getPageName = () => {
    if (pathname === '/') return 'Overview';
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
      <Flex alignItems="center" gap={4}>
        <IconButton
          display={{ base: 'flex', lg: 'none' }}
          aria-label="Open menu"
          icon={<RxHamburgerMenu size={28} />}
          onClick={onMenuClick}
          bg={'white'}
          _hover={{
            bg: 'white',
          }}
          // color={'#ffffff'}
          // rounded={'full'}
          size={'lg'}
        />
        <Heading as="h1" size="lg" display={{ base: 'none', lg: 'flex' }}>
          {getPageName()}
        </Heading>
      </Flex>
      <Heading as="h1" size="lg" display={{ base: 'flex', lg: 'none' }}>
        {getPageName()}
      </Heading>
      <HStack spacing={'1.5rem'} display={{ base: 'none', lg: 'flex' }}>
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
      <Box display={{ base: 'block', lg: 'none' }}>
        <Avatar
          size={'md'}
          name={'HP'}
          src={'/christiana.png'}
          borderRadius={'full'}
        />
      </Box>
    </Flex>
  );
};

export default TopNav;

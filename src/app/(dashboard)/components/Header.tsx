import React from 'react';
import { Box, Flex, Text, HStack } from '@chakra-ui/react';
import Image from 'next/image';
import TransactionBox from './TransactionBox';

const Header = () => {
  return (
    <HStack
      align={'stretch'}
      w={'full'}
      spacing={6}
      flexDirection={{ base: 'column', lg: 'row' }}
    >
      <Box>
        <Flex justifyContent={'space-between'}>
          <Text fontWeight={'semibold'} fontSize={'1.375rem'}>
            My Cards
          </Text>
          <Text fontWeight={'semibold'} fontSize={'1.0625rem'}>
            See All
          </Text>
        </Flex>
        <Flex
          gap={6}
          mt={4}
          direction={{ base: 'column', lg: 'row' }}
          align={'center'}
        >
          <Image src="/blue.png" alt="blue" width={350} height={235} />
          <Image src="/white.png" alt="white" width={350} height={235} />
        </Flex>
      </Box>
      <Box w={{ base: '100%', lg: '350px' }} h={'239px'}>
        <Text fontWeight={'semibold'} fontSize={'1.375rem'}>
          Recent Transactions
        </Text>
        <TransactionBox />
      </Box>
    </HStack>
  );
};

export default Header;

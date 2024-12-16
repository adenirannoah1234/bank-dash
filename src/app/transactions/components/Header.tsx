import { HStack, Text, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import BarChart from './BarChart';

import React from 'react';

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
          <Text
            fontWeight={'semibold'}
            fontSize={'1.375rem'}
            color={'#343d6bff'}
          >
            My Cards
          </Text>
          <Text
            fontWeight={'semibold'}
            fontSize={'1.0625rem'}
            color={'#343d6bff'}
          >
            + Add Card
          </Text>
        </Flex>
        <Flex
          gap={6}
          mt={4}
          direction={{ base: 'column', lg: 'row' }}
          align={'center'}
        >
          <Image src="/blue.png" alt="blue" width={350} height={225} />
          <Image src="/white.png" alt="white" width={350} height={225} />
        </Flex>
      </Box>
      <Box w={{ base: '100%', lg: '350px' }} h={'225px'}>
        <Text fontWeight={'semibold'} fontSize={'1.375rem'} color={'#343d6bff'}>
          My Expenses
        </Text>
        <BarChart />
      </Box>
    </HStack>
  );
};

export default Header;

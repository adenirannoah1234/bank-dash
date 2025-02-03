import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import TransactionBox from './TransactionBox';
import { VirtualCard } from './Card';

const Header = () => {
  return (
    <Flex w="full" gap={6} direction={{ base: 'column', lg: 'row' }}>
      {/* Cards Section */}
      <Box flex={{ lg: '1' }} w="full">
        <Flex justifyContent="space-between" mb={4}>
          <Text fontWeight="semibold" fontSize="1.375rem">
            My Cards
          </Text>
          <Text fontWeight="semibold" fontSize="1.0625rem">
            See All
          </Text>
        </Flex>
        <Flex
          gap={6}
          direction={{ base: 'column', lg: 'row' }}
          align={{ base: 'center', lg: 'stretch' }}
          justify="space-between"
        >
          {/* Blue Card */}
          <Box position="relative" w={{ base: '350px', lg: '48%' }} h="235px">
            {/* <Image
              src="/blue.png"
              alt="blue"
              width={350}
              height={235}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
              priority
            /> */}
            <VirtualCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              expiryDate="12/22"
              cardNumber="3778 **** **** 1234"
              textColor="text-white"
              bgColor="bg-[#2e2bf0ff]"
              bgColor2="bg-[#4c49f2ff]"
            />
          </Box>

          {/* White Card */}
          <Box position="relative" w={{ base: '350px', lg: '48%' }} h="235px">
            <VirtualCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              expiryDate="12/22"
              cardNumber="3778 **** **** 1234"
              textColor="text-black"
              bgColor="bg-[#ffffffff]"
              bgColor2="bg-[#ffffffff]"
            />
          </Box>
        </Flex>
      </Box>

      {/* Transactions Section */}
      <Box flex={{ lg: '0.6' }} w="full" minH="239px">
        <Text fontWeight="semibold" fontSize="1.375rem" mb={4}>
          Recent Transactions
        </Text>
        <Box h="calc(100% - 40px)">
          <TransactionBox />
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;

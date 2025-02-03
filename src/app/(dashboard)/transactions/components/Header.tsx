import { HStack, Text, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import BarChart from './Barchart';
import React from 'react';
import { VirtualCard } from '../../components/Card';

const Header = () => {
  return (
    <Flex w="full" gap={6} direction={{ base: 'column', lg: 'row' }}>
      {/* Cards Section */}
      <Box flex="1" w="full">
        <Flex justifyContent="space-between" mb={4}>
          <Text fontWeight="semibold" fontSize="1.375rem" color="#343d6bff">
            My Cards
          </Text>
          <Text fontWeight="semibold" fontSize="1.0625rem" color="#343d6bff">
            + Add Card
          </Text>
        </Flex>
        <Box
          w="full"
          overflowX={{ base: 'scroll', lg: 'hidden' }}
          overflowY={{ base: 'hidden', md: 'visible' }}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <Flex
            gap={6}
            w={{ base: 'max-content', lg: 'full' }}
            direction={{ base: 'row', lg: 'row' }}
            justify={{ lg: 'space-between' }}
          >
            <Box
              position="relative"
              minW={{ base: '350px', lg: '48%' }}
              h={{ base: '305px', lg: '305px' }}
            >
              {/* <Image
                src="/blue.png"
                alt="blue"
                width={350}
                height={305}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
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
            <Box
              position="relative"
              minW={{ base: '350px', lg: '48%' }}
              h={{ base: '305px', lg: '305px' }}
              // #ffffffff
            >
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
      </Box>

      {/* Expenses Section */}
      <Box flex={{ lg: '0.6' }} w="full" minH="225px">
        <Text
          fontWeight="semibold"
          fontSize="1.375rem"
          color="#343d6bff"
          mb={4}
        >
          My Expenses
        </Text>
        <Box h="calc(100% - 40px)">
          <BarChart />
        </Box>
      </Box>
    </Flex>
  );
};

export default Header;

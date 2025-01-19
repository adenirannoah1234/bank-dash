import { Box, Flex, Text, HStack, IconButton, Stack } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { TransactionData } from '../../constants/data';

const TransactionBox = () => {
  return (
    <Stack
      bg={'#ffffffff'}
      p={'5'}
      borderRadius={'2xl'}
      spacing={2}
      w={'full'}
      // h={'full'}
      mt={4}
    >
      {TransactionData.map((data, index) => (
        <HStack spacing={4} key={index}>
          <IconButton
            aria-label="Deposit"
            variant="outline"
            size="lg"
            rounded={'full'}
            bg={data.imageBg}
            _hover={{
              bg: data.imageBg,
            }}
            icon={
              <Image
                src={data.image}
                alt="Deposit Icon"
                width={24}
                height={24}
              />
            }
          />
          <Flex justifyContent="space-between" alignItems="center" width="100%">
            <Box>
              <Text fontSize={'1rem'} fontWeight={'medium'}>
                {data.name}
              </Text>
              <Text fontSize={'0.9375rem'} color={'#718ebfff'}>
                {data.date}
              </Text>
            </Box>
            <Text color={data.color} fontWeight={'medium'} fontSize={'1rem'}>
              {data.amount}
            </Text>
          </Flex>
        </HStack>
      ))}
    </Stack>
  );
};

export default TransactionBox;

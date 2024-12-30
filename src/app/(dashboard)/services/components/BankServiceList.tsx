import { Button, HStack, Stack, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { ServiceList } from '@/app/constants/data';

import Image from 'next/image';

const BankServiceList = () => {
  return (
    <Stack spacing={5}>
      <Text fontWeight={'semibold'} fontSize={'1.375rem'} color={'#343d6bff'}>
        Bank Service List
      </Text>
      <Stack spacing={5}>
        {ServiceList.map((service, index) => (
          <HStack
            key={service.id}
            justifyContent={'space-between'}
            bg={'#ffffffff'}
            p={5}
            borderRadius={'3xl'}
            boxShadow={'md'}
          >
            <Flex gap={5}>
              <Image src={service.imageOne} alt="icon" width={60} height={60} />
              <Stack mt={1}>
                <Text
                  fontSize={'1rem'}
                  fontWeight={'medium'}
                  color={'#303030ff'}
                >
                  {service.nameOne}
                </Text>
                <Text fontSize={'0.9375rem'} color={'#718ebfff'}>
                  {service.descriptionOne}
                </Text>
              </Stack>
            </Flex>
            <Stack>
              <Text fontSize={'1rem'} fontWeight={'medium'} color={'#303030ff'}>
                {service.nameTwo}
              </Text>
              <Text fontSize={'0.9375rem'} color={'#718ebfff'}>
                {service.descriptionTwo}
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={'1rem'} fontWeight={'medium'} color={'#303030ff'}>
                {service.nameTwo}
              </Text>
              <Text fontSize={'0.9375rem'} color={'#718ebfff'}>
                {service.descriptionTwo}
              </Text>
            </Stack>
            <Stack>
              <Text fontSize={'1rem'} fontWeight={'medium'} color={'#303030ff'}>
                {service.nameTwo}
              </Text>
              <Text fontSize={'0.9375rem'} color={'#718ebfff'}>
                {service.descriptionTwo}
              </Text>
            </Stack>
            <Button
              bg={'white'}
              border={'2px solid #93a9cfff'}
              color={'#718ebfff'}
              borderRadius={'3xl'}
              px={'30px'}
            >
              View Details
            </Button>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default BankServiceList;

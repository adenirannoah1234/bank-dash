import { HStack } from '@chakra-ui/react';
import { ServiceList } from '@/app/constants/data';
import { Stack } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { Button, Flex, Text } from '@chakra-ui/react';

const BaseBankServiceList = () => {
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
            p={2}
            borderRadius={'3xl'}
          >
            <Flex gap={5}>
              <Image src={service.imageOne} alt="icon" width={45} height={20} />
              <Stack mt={1}>
                <Text
                  fontSize={'0.875rem'}
                  fontWeight={'medium'}
                  color={'#303030ff'}
                  whiteSpace={'nowrap'}
                >
                  {service.nameOne}
                </Text>
                <Text fontSize={'0.75rem'} color={'#718ebfff'}>
                  {service.descriptionOne}
                </Text>
              </Stack>
            </Flex>

            <Button
              bg={'white'}
              //   border={'2px solid #93a9cfff'}
              color={'#2622f5ff'}
            >
              View Details
            </Button>
          </HStack>
        ))}
      </Stack>
    </Stack>
  );
};

export default BaseBankServiceList;
